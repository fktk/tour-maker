import Typography from '@mui/material/Typography'

import Hero from '@components/Hero'
import ReadFileButton from '@components/ReadFileButton'

function tourMakerPage() {
  return (
    <>
      <Hero
        imgSrc='https://picsum.photos/1001/900'
        imgAlt='Hero Image'
        title='Tour Maker'
        subtitle='思い出のライドをもう一度'
      />

      <Typography
        variant='h1'
        align='center'
        gutterBottom
        sx={{
          color: 'primary.main',
          fontSize: '4.5rem'
        }}
      >
        Coming soon...
      </Typography>

      <ReadFileButton />
    </>
  )
}

export default tourMakerPage;
