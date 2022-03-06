import SectionCycleMan from '@components/SectionCycleMan'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function CycleManPage() {
  return (
    <Container
      component='section'
      maxWidth='md'
    >
      <Typography
        variant='h1'
        textAlign='center'
        fontFamily="Caveat"
        sx={{
          mt: 5,
          color: 'secondary.main',
          fontSize: '4.5rem'
        }}
      >
        Cycle Man
      </Typography>

      <SectionCycleMan />
    </Container>
  )
}

export default CycleManPage
