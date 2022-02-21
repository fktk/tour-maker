import Box from '@mui/material/Box'
import Hero from '@components/Hero'
import SectionApps from '@components/SectionApps'
import SectionAbout from '@components/SectionAbout'
import SectionImage from '@components/SectionImage'
// import SectionReview from '@components/SectionReview'

export default function Homepage() {
  return (
    <>
      <Hero
        imgSrc='https://picsum.photos/1001/900'
        imgAlt='Hero Image'
        title='Tour de Earth'
        subtitle='地球を走ろう'
      />

      <Box sx={{my: 15}}>
        <SectionApps />
      </Box>

      <Box sx={{my: 15}}>
        <SectionImage imgSrc='https://picsum.photos/1000/900' imgAlt='image' />
      </Box>

      <Box sx={{my: 15}}>
        <SectionAbout />
      </Box>

    </>
  );
}
