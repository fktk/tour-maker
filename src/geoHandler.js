'use strict';

import fetch from 'node-fetch'
import { getGreatCircleBearing, findNearest } from 'geolib'
import smooth from 'chaikin-smooth'

import { tourWrapper, tourPoint, lineFeature } from './kmlTemplate'

import { toISOString } from './utils'

import 'dotenv/config'

export default async function recordsToTourString(records) {
  let time_prev = 0;

  let tours = '';
  let coordinates = '';

  records = lightenRecords({records, minSpeed: 5});

  const {lon, lat, alt} = await smoothGeoPoint(records);

  const skipNumber = 3;

  records.forEach((d, i) => {
    if (i % (skipNumber+1) !== 0) {return;}
    const time_now = Date.parse(d.timestamp);
    const head = (
      i === 0 ?
      getGreatCircleBearing(
        { latitude: lat[0], longitude: lon[0] },
        { latitude: lat[1], longitude: lon[1] },
      )
      : getGreatCircleBearing(
        { latitude: lat[i-1], longitude: lon[i-1] },
        { latitude: lat[i], longitude: lon[i] },
      )
    )
    // 何倍速で再生するか 大きいとG.E.の3D更新が間に合わない
    const devideTime = 4;
    // durationは最大で20/devideTime
    const duration = (i===0 ? 10 : Math.min((time_now - time_prev)/1000, 20) / devideTime)

    tours += tourPoint({
      duration,
      timestamp: toISOString(new Date(d.timestamp)),
      lon: lon[i],
      lat: lat[i],
      alt: alt[i] + 15, // 少し視点が高くないと地面におされてガタガタする(G.E.の仕様)
      head,
      tilt: 77,
      altitudeMode: 'absolute',
      start: (i===0), // startだけはカメラをとめる
    })
    coordinates += `${lon[i]},${lat[i]},${alt[i]+10} `
    time_prev = time_now;
  })
  const placemarkLine = lineFeature(coordinates, 'absolute');
  return tourWrapper(tours, placemarkLine);
}

function lightenRecords({records, minSpeed}) {
  const newRecords = [];
  records.forEach((record) => {
    if (record.speed < minSpeed) {return;}
    if (!record.position_long) {return;}
    newRecords.push(record);
  })
  return newRecords;
}

async function smoothGeoPoint(records) {
  const beforeSmoothed = [];

  records.forEach(record => {
    beforeSmoothed.push([record.position_long, record.position_lat]);
  })
  //x回スムージングすると配列が2^xの大きさになる
  const smoothedPath = smooth(smooth(beforeSmoothed)).map(point => {
    return {longitude: point[0], latitude: point[1]};
  });

  const lon = [];
  const lat = [];
  const lonlat = [];
  beforeSmoothed.map((point, i) => {
    //2回スムージングしたため2^2倍インデックスにかけている
    return findNearest({longitude: point[0], latitude: point[1]}, smoothedPath.slice(i*4, i*4+4));
  }).forEach(point => {
    lon.push(point.longitude);
    lat.push(point.latitude);
    lonlat.push(point.longitude, point.latitude);
  })

  // 標高はG.E.では建物込なので、建物なしのデータをYahoo apiから取得する
  const alt = await getElevationList(lonlat);
  return { lon, lat, alt };
}

async function getElevationList(lonlat) {
  let alt = [];
  let lonlat_200;
  
  while ((lonlat_200 = lonlat.splice(0, 200)).length !== 0) {
    const coordinates = lonlat_200.join(',');
    alt = alt.concat(await fetchElevation(coordinates));
  }
  return alt;
}

async function fetchElevation(coordinates) {
  const URL = `https://map.yahooapis.jp/alt/V1/getAltitude`
  const appid = process.env.YAHOOID;
  const body = `appid=${appid}&coordinates=${coordinates}&output=json`
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body
  });
  const res = await response.text();
  const altList = [];
  JSON.parse(res).Feature.forEach(point => {
    altList.push(point.Property.Altitude);
  })
  return altList;
}

