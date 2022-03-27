import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Slider from '@mui/material/Slider'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Download from '@mui/icons-material/Download'
import FileOpen from '@mui/icons-material/FileOpen'
import MuiNextLink from '@src/Link'
import Public from '@mui/icons-material/Public'
import BikeIcon from '@mui/icons-material/DirectionsBike'

import Skeleton from '@mui/material/Skeleton'

import { fileToRecord, getKml } from '@src/handleFiles'

import fileDownload from 'js-file-download'

export default function SectionCycleMan() {
  const [course, setCourse] = useState([0, 100])
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState('not selected')
  const [records, setRecords] = useState({})

  return (
    <Container 
      component='section'
      maxWidth='md'
    >
      <Grid
        container
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        my={5}
      >
        <label htmlFor="contained-button-file" style={{width: '100%', maxWidth: '300px'}}>
          <input
            style={{display: 'none'}}
            id='contained-button-file'
            type='file'
            accept='.fit,.gpx,.FIT,.GPX'
            onChange={ async (event) => {
              const file = event.target.files[0]
              if (!file) {return}
              setRecords(await fileToRecord(file))
              setFile(file.name)
            } }
          />
          <Button variant='contained' component='span'
            color='secondary'
            startIcon={<FileOpen />}
            sx={{ width: '100%'}}
          >
            open fit or gpx file
          </Button>
          <Typography
            sx={{width: '100%', textAlign: 'center', mt: 1}}
          >
            { file }
          </Typography>
        </label>

        <Skeleton variant='rectangular' animation={false} width='100%' height={200} />
        <Typography
          variant='body2'
          sx={{width: '80%'}}
          textAlign='center'
        >
          Course Range
          <Slider
            aria-label='course range'
            value={course}
            valueLabelDisplay='auto'
            onChange={(_, value) => {
              setCourse(value)
            }}
          />
        </Typography>


        <LoadingButton
          onClick={async () => {
            setLoading(true)
            const kml = getKml(records)
            fileDownload(kml, file.substr(0, file.lastIndexOf('.')) + '.kml')
            setLoading(false)
          }}
          loading={loading}
          variant='contained'
          startIcon={<Download />}
          loadingPosition='end'
          color='secondary'
          sx={{maxWidth: '300px', width: '100%'}}
        >
          download tour file
        </LoadingButton>

        <MuiNextLink
          href='https://earth.google.com/web/'
          target='_blank'
          rel='noopener noreferrer'
          sx={{textDecoration: 'none', maxWidth: '300px', width: '100%'}}
        >
          <Button variant='contained' component='span'
            color='secondary'
            sx={{width: '100%'}}
            startIcon={<BikeIcon />}
            endIcon={<Public />}
          >
            {' Go to the Earth '}
          </Button>
        </MuiNextLink>

      </Grid>
    </Container>
  )
}
