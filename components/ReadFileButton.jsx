import Button from '@mui/material/Button'

import FitParser from 'fit-file-parser/dist/fit-parser'
import fileDownload from 'js-file-download'

async function onFileChange(event) {
  const file = event.target.files[0]
  let records;
  let reader = new FileReader();
  reader.readAsArrayBuffer(file)
  reader.onload = async () => {
    const fitParser = new FitParser({
      speedUnit: 'km/h',
    });
    const buf = reader.result

    fitParser.parse(buf, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        records = data.records;
      }
    })

    const res = await fetch('api/create',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(records)
    })

    const kml = await res.text()
    fileDownload(kml, 'file.kml')

  }
}


export default function ReadFileButton() {

  return (
    <>
      <label htmlFor="contained-button-file">
        <input
          style={{display: 'none'}}
          id='contained-button-file'
          type='file'
          onChange={ onFileChange }
        />
        <Button variant='contained' component='div' >
          select fit file
        </Button>
      </label>
    </>

  )
}
