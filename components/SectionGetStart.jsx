import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

export default function SectionGetStart() {
  return (
    <Container
      component='section'
      maxWidth='md'
      sx={{my: 15}}
    >
      <Typography
        variant='h2'
        textAlign='center'
        sx={{ width: '100%' }}
        gutterBottom
      >
        Getting Started
      </Typography>
      <Typography
        sx={{ mb: 5 }}
      >
        <p>
          このアプリはGPSなどで記録した走行データファイルを、Google Earth上で3D再生できるようにファイル変換します。
        </p>
        <p>
          走行した時刻が記録されている場合は、その速度を再現します。
          経路作成アプリで作成したGPXファイルなどは、時刻が記録されていないため、
          作成した経路を等速で移動します。
        </p>
      </Typography>
      <Stepper>
        <Step key={1} completed={true} active={true}>
          <StepLabel>
            hoge
          </StepLabel>
        </Step>
        <Step key={2} completed={true} >
          <StepLabel>
            hoge
          </StepLabel>
        </Step>
        <Step key={3} completed={true} >
          <StepLabel>
            hoge
          </StepLabel>
        </Step>
        <Step key={4} completed={true} >
          <StepLabel>
            hoge
          </StepLabel>
        </Step>
      </Stepper>
      <Image 
        src='https://picsum.photos/800/600'
        alt='About Image'
        layout='responsive'
        width={800}
        height={600}
      />
    </Container>
  )
}

