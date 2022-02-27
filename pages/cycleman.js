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
        sx={{
          mt: 5
        }}
      >
        Cycle Man
      </Typography>

      <SectionCycleMan />
    </Container>
  )
}

export default CycleManPage
