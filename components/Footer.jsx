import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MuiNextLink from '@src/Link'
import Box from '@mui/material/Box'
import Github from '@mui/icons-material/GitHub'
import MailOutline from '@mui/icons-material/MailOutline'

export default function Footer() {
  return (
    <Box component='footer' sx={{ py: 5, bgcolor: 'primary.main' }}>
      <Stack
        direction='row'
        justifyContent='center'
        spacing={4}
        sx={{ mb: 5 }}
      >
        <MuiNextLink
          sx={{ textDecoration: 'none', color: 'common.white' }}
          href='https://github.com/fktk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github fontSize='large' />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: 'none', color: 'common.white', pt: 0.2}}
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:windwild12@gmail.com'
        >
          <MailOutline fontSize='large' />
        </MuiNextLink>
      </Stack>
      <Typography align='center' color='common.white'>
        &copy; {new Date().getFullYear()}, TK
      </Typography>
    </Box>
  )
}
