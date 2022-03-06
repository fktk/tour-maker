import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

export default function SectionAbout() {
  return (
    <Container
      component='section'
      maxWidth='md'
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Image 
            src='https://picsum.photos/800/600'
            alt='About Image'
            layout='responsive'
            width={800}
            height={600}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            component='h2'
            variant='h3'
            textAlign={{xs: 'center', sm: 'left'}}
            sx={{ width: '100%' }}
          >
            About Me
          </Typography>
          <Typography
            textAlign='left'
            sx={{ mb: 5 }}
          >
            <p>
              普段は電池材料の開発者として働いています。
              AIを独学していたら、WEBアプリを作れるようになっていました。
              PythonとJavaScriptを使えます。
            </p>
            <p>
              趣味は自転車通勤。SPECIALIZEDのAllez Eliteに乗ってます。
            </p>
          </Typography>
          {/* <MuiNextLink href='/about' underline='none'> */}
          {/*   <Button variant='outlined' size='large'> */}
          {/*     details */}
          {/*   </Button> */}
          {/* </MuiNextLink> */}
        </Grid>
      </Grid>
    </Container>
  )
}
