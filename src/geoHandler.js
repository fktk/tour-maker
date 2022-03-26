'use strict';

import { getGreatCircleBearing, findNearest } from 'geolib'
import smooth from 'chaikin-smooth'

import { tourWrapper, tourPoint, lineFeature } from './kmlTemplate'
import { toISOString } from './utils'

export function recordsToTourString(records) {
  let time_prev = 0;

  let tours = '';
  let coordinates = '';

  const {lon, lat, alt} = smoothGeoPoint(records);

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
    const devideTime = 3;
    // durationは最大で20/devideTime
    const duration = (i===0 ? 10 : Math.min((time_now - time_prev)/1000, 20) / devideTime)

    tours += tourPoint({
      duration,
      timestamp: toISOString(new Date(d.timestamp)),
      lon: lon[i],
      lat: lat[i],
      alt: alt[i] + 30, // 少し視点が高くないと地面におされてガタガタする(G.E.の仕様)
      head,
      tilt: 77,
      altitudeMode: 'absolute',
      start: (i===0), // startだけはカメラをとめる
    })
    coordinates += `${lon[i]},${lat[i]},5 `
    time_prev = time_now;
  })
  const placemarkLine = lineFeature(coordinates, 'relativeToGround');
  return tourWrapper(tours, placemarkLine);
}

function smoothGeoPoint(records) {
  const beforeSmoothed = records.map(record => {
    return [record.position_long, record.position_lat, record.altitude];
  })
  //x回スムージングすると配列が2^xの大きさになる
  const smoothedPath = smooth(smooth(beforeSmoothed)).map(point => {
    return {longitude: point[0], latitude: point[1]};
  });

  const lon = [];
  const lat = [];
  const alt = [];
  beforeSmoothed.map((point, i) => {
    //2回スムージングしたため2^2倍インデックスにかけている
    //スムージングしたコース(配列数2^2倍)に対し、もとのコースの最近接の点を探している
    alt.push(point[2])
    return findNearest({longitude: point[0], latitude: point[1]}, smoothedPath.slice(i*4, i*4+4));
  }).forEach(point => {
    lon.push(point.longitude);
    lat.push(point.latitude);
  })
  console.log(alt)

  return { lon, lat, alt };
}

