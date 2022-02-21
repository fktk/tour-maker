import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import SvgCycleMan from '@components/svg/SvgCycleMan'


export default function Hero({ imgSrc, imgAlt, title, subtitle } ) {
  return (
    <Grid
      component='section'
      container
      sx={{
        position: 'relative',
        height: '80vh',
        width: '100%',
        overflow: 'hidden',
        zIndex: -100,
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout='fill' objectFit='cover' />
      <Grid
        container
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0, .6)',
        }}
      >
      </Grid>
      <Grid
        container
        item
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        zIndex='0'
      >
        <Typography
          variant='h1'
          align='center'
          gutterBottom
          fontFamily="Caveat"
          sx={{
            color: 'secondary.main',
            fontSize: '4.5rem'
          }}
        >
          { title }
        </Typography>
        <Typography
          component='p'
          variant='h4'
          align='center'
          color='common.white'
          sx={{
            mb: 10,
          }}
        >
          { subtitle }
        </Typography>
        <SvgCycleMan />
      </Grid>
    </Grid>
  )
}
