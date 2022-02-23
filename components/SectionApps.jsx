
import { Container, Grid } from '@mui/material'
import NavigationCard from '@components/NavigationCard'
import Typography from '@mui/material/Typography'

export default function SectionApps() {
  return (
    <Container maxWidth='md'>

      <Typography variant='h2' textAlign='center' sx={{ mb: 10 }}>
        Apps
      </Typography>

      <Grid container spacing={2}>
        <Grid container item justifyContent='center' xs={12} md={6}>
          <NavigationCard
            imgSrc='https://picsum.photos/800/1000'
            imgAlt='Tour Maker'
            title='Tour Maker'
            desc='fitファイルやgpxファイルをGoogle Earth上のツアーファイル(kmlファイル)に変換するアプリ。'
            pagePath='./tour-maker'
            ctaText='使ってみる'
          />
        </Grid>
        <Grid container item justifyContent='center' xs={12} md={6}>
          <NavigationCard
            imgSrc='https://picsum.photos/1000/900'
            imgAlt='Cycle Man'
            title='Cycle Man'
            desc='サイクルマンのポーズやケイデンスを変えるアプリ。サイクルマンは疲れ知らずです。'
            pagePath='./cycleman'
            ctaText='使ってみる'
          />
        </Grid>
      </Grid>

    </Container>
  )
}
