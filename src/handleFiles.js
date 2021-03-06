import FitParser from 'fit-file-parser/dist/fit-parser'
import gpxParser from 'gpxparser'
import { getDistance } from 'geolib'
import { recordsToTourString } from '@src/geoHandler'

export async function fileToRecord(file) {
  let records;

  const ext = file.name.split('.').pop().toLowerCase()
  if (ext === 'fit') {
    const buf = await file.arrayBuffer()
    const fitParser = new FitParser({
      speedUnit: 'km/h',
    });

    fitParser.parse(buf, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        records = data.records;
        records = records.map((record) => {
          return {
            position_lat: record.position_lat,
            position_long: record.position_long,
            altitude: record.altitude,
            timestamp: record.timestamp,
          }
        })
      }
    })
    return records

  } else if (ext === 'gpx') {
    const text = await file.text()
    const gpx = new gpxParser()
    gpx.parse(text)
    records = gpx.tracks[0].points
    records = records.map((record) => {
      return {
        position_lat: record.lat,
        position_long: record.lon,
        altitude: record.ele,
        timestamp: record.time,
      }
    })
    return records

  } else {
    return undefined
  }
}

export function getKml(records) {
  if (records[0].timestamp === null) {
    records = setTimestamp(records)
  }
  const tour = recordsToTourString(records);
  return tour
}

function setTimestamp(records) {
  let time
  const newRecords = records.map((record, i, arr) => {
    if (i === 0) {
      time = new Date()
    } else {
      const durSecond = getDistance(
        {latitude: arr[i].position_lat, longitude: arr[i].position_long},
        {latitude: arr[i - 1].position_lat, longitude: arr[i - 1].position_long},
        0.01
      ) / 10 // 時速36 km/h で走ったときの時間
      time.setSeconds(time.getSeconds() + time.getMilliseconds() / 1000 +  durSecond)
    }
    return {
      position_lat: record.position_lat,
      position_long: record.position_long,
      altitude: record.altitude,
      timestamp: new Date(time.getTime()),
    }
  })

  return newRecords
}

