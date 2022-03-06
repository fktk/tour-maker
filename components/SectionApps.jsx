
import { Container, Grid } from '@mui/material'
import NavigationCard from '@components/NavigationCard'
import Typography from '@mui/material/Typography'

export default function SectionApps() {
  return (
    <Container maxWidth='md'>
      <Typography
        variant='h3'
        component='h2'
        textAlign='center'
        sx={{ mb: 5 }}>
        Apps
      </Typography>

      <Grid container spacing={2}>
        <Grid container item justifyContent='center' xs={12} md={6}>
          <NavigationCard
            imgSrc='https://picsum.photos/800/1000'
            imgAlt='Tour Maker'
            title='Tour Maker'
            desc='Google Earthのツアーファイルを作成するアプリ。fitファイルやgpxファイルを変換して作ります。'
            pagePath='./tour-maker'
            ctaText='Try now'
          />
        </Grid>
        <Grid container item justifyContent='center' xs={12} md={6}>
          <NavigationCard
            imgSrc='https://picsum.photos/1000/900'
            imgAlt='Cycle Man'
            title='Cycle Man'
            desc='サイクルマンのポーズやケイデンスを変えるアプリ。サイクルマンは疲れ知らずです。'
            pagePath='./cycleman'
            ctaText='Try now'
          />
        </Grid>
      </Grid>

    </Container>
  )
}
