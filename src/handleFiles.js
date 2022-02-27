import FitParser from 'fit-file-parser/dist/fit-parser'

export async function fileToRecord(file) {
  let records;

  const buf = await file.arrayBuffer()
  const fitParser = new FitParser({
    speedUnit: 'km/h',
  });

  fitParser.parse(buf, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      records = data.records;
    }
  })
  return records
}

export async function getKml(data) {

  const res = await fetch('api/create',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const kml = await res.text()

  return kml
}

