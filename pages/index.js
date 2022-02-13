import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import ReadFileButton from '@components/ReadFileButton'
import Hero from '@components/Hero'
import SectionAbout from '@components/SectionAbout'
import SectionImage from '@components/SectionImage'
import SectionReview from '@components/SectionReview'
import NavigationCard from '@components/NavigationCard'
import Footer from '@components/Footer'

export default function Homepage() {
  return (
    <>
      <Hero
        imgSrc='https://picsum.photos/1000/900'
        imgAlt='Hero Image'
        title='De West Sakura'
        subtitle='♥折り紙♥広告♥買って♥'
      />
      <ReadFileButton />
      <p>
        お得だよ♥買って♥１億円で♥折り紙一枚を♥色は選んでいいよ♥でもお気に入りのはだめ♥買ってね♥今なら９９９９万９９９９円だよ♥安いよ♥だから買ってね♥鶴おればいいから買って♥１０００枚買って♥ね♥
      </p>
      <p>
        ハッピーマンボウいらんかね♥今なら特別１兆円♥今だけ♥買わない手はない♥１家にに一つある時代♥近くにいると幸せになるよ♥
      </p>
      <SectionAbout />
      <SectionImage imgSrc='https://picsum.photos/1000/900' imgAlt='image' />
      <SectionReview />
      <SectionImage imgSrc='https://picsum.photos/1000/900' imgAlt='image' />
      <Container maxWidth='md' sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent='center' xs={12} md={6}>
            <NavigationCard
              imgSrc='https://picsum.photos/1000/900'
              imgAlt='menu'
              title='Menu'
              desc='lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
              pagePath='./menu'
              ctaText='Check Out'
            />
          </Grid>
          <Grid container item justifyContent='center' xs={12} md={6}>
            <NavigationCard
              imgSrc='https://picsum.photos/800/1000'
              imgAlt='menu'
              title='Menu'
              desc='lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
              pagePath='./menu'
              ctaText='Check Out'
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
