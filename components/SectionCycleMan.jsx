import { useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import MuiNextLink from '@src/Link'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import SvgCycleMan from '@components/svg/SvgCycleMan'

export default function SectionCycleMan() {
  const [cadence, setCadence] = useState(60)

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
      <Grid container spacing={3}
        justifyContent="center"
        alignItems='center'
        my={10}
      >
        <Grid item xs={12} sm={6} >
          <Box sx={{
            maxWidth: '200px',
            mx: 'auto'
            }}>
            <SvgCycleMan
              cadence={cadence}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Slider
            aria-label='cadence'
            defaultValue={cadence}
            valueLabelDisplay='auto'
            step={10}
            min={30}
            max={200}
            onChange={(_, value) => {
              setCadence(value)
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
