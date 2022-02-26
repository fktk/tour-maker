import { useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import SvgCycleMan from '@components/svg/SvgCycleMan'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function SectionCycleMan() {
  const [armLength, setArmLength] = useState(520)
  const [backBending, setBackBending] = useState(40)
  const [legLength, setLegLength] = useState(840)
  const [pedalLength, setPedalLength] = useState(170)
  const [cadence, setCadence] = useState(30)
  const [dropBar, setDropBar] = useState(false)

  return (
    <Container
      component='section'
      maxWidth='md'
    >
      <Typography
        variant='h1'
        textAlign='center'
        sx={{
          my: 5
        }}
      >
        Cycle Man
      </Typography>

      <Grid container spacing={3} my={5}
        justifyContent="center"
        alignItems='center'
      >
        <Grid item xs={12} sm={6} >
          <Box sx={{
            maxWidth: '200px',
            mx: 'auto'
            }}>
            <SvgCycleMan
              cadence={cadence}
              pedalLength={pedalLength / 2}
              legLength={legLength / 4}
              armLength={armLength / 4}
              backBending={backBending}
              dropBar={dropBar}
            />
          </Box>
        </Grid>

        <Grid
          item xs={8} sm={4}
          container
          flexDirection='column'
          justifyContent='center'
          alignItems='left'

        >
          <FormControlLabel 
            control={
              <Switch
                checked={dropBar}
                onChange={(_, value) => {
                  setDropBar(value)
                  if (value && (cadence <  280)) {
                    setCadence(cadence + 30)
                  }
                }}
              />
            }
            label='Drop bar'
          />
          <Typography
            variant='body2'
          >
            Bending
            <Slider
              aria-label='back bending'
              value={backBending}
              valueLabelDisplay='auto'
              step={1}
              min={40}
              max={50}
              onChange={(_, value) => {
                setBackBending(value)
              }}
            />
          </Typography>
          <Typography
            variant='body2'
            gutterBottom
          >
            Cadence
            <Slider
              aria-label='cadence'
              value={cadence}
              valueLabelDisplay='auto'
              step={10}
              min={10}
              max={300}
              onChange={(_, value) => {
                setCadence(value)
              }}
            />
          </Typography>

          <Typography
            variant='body2'
          >
            Arm Length
            <Slider
              aria-label='arm length'
              value={armLength}
              valueLabelDisplay='auto'
              step={10}
              min={500}
              max={600}
              onChange={(_, value) => {
                setArmLength(value)
              }}
            />
          </Typography>

          <Typography
            variant='body2'
          >
            Leg Length
            <Slider
              aria-label='leg length'
              value={legLength}
              valueLabelDisplay='auto'
              step={10}
              min={800}
              max={900}
              onChange={(_, value) => {
                setLegLength(value)
              }}
            />
          </Typography>

          <Typography
            variant='body2'
          >
            Pedal Length
            <Slider
              aria-label='pedal length'
              value={pedalLength}
              valueLabelDisplay='auto'
              step={5}
              min={150}
              max={180}
              onChange={(_, value) => {
                setPedalLength(value)
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
