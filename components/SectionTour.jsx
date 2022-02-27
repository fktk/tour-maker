import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'

import { fileToRecord, getKml } from '@src/handleFiles'

import fileDownload from 'js-file-download'

export default function SectionCycleMan() {
  const [armLength, setArmLength] = useState(520)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState('not selected')
  const [records, setRecords] = useState({})

  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <label htmlFor="contained-button-file">
        <input
          style={{display: 'none'}}
          id='contained-button-file'
          type='file'
          onChange={ async (event) => {
            const file = event.target.files[0]
            if (!file) {return}
            setRecords(await fileToRecord(file))
            setFile(file.name)
          } }
        />
        <Button variant='contained' component='span' >
          open fit file
        </Button>
      </label>
      <Typography>
        { file }
      </Typography>

      <Typography
        variant='body2'
      >
        Arm Length
        <Slider
          aria-label='arm length'
          value={armLength}
          valueLabelDisplay='auto'
          step={10} min={500} max={600}
          onChange={(_, value) => {
            setArmLength(value)
          }}
        />
      </Typography>

      <LoadingButton
        onClick={async () => {
          setLoading(true)
          const kml = await getKml(records)
          console.log(kml)
          setLoading(false)
        }}
        loading={loading}
        variant='contained'
        endIcon={<SendIcon />}
        loadingPosition='end'
      >
        send
      </LoadingButton>

    </Grid>
  )
}
