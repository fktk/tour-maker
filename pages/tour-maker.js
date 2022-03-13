import Typography from '@mui/material/Typography'
import SectionTour from '@components/SectionTour'
import SectionGetStart from '@components/SectionGetStart'

import Hero from '@components/Hero'

function tourMakerPage() {
  return (
    <>
      <Hero
        imgSrc='https://picsum.photos/1001/900'
        imgAlt='Hero Image'
        title='Tour Maker'
        subtitle='思い出のライドをもう一度'
      />

      <SectionTour />
      <SectionGetStart />

    </>
  )
}

export default tourMakerPage;
