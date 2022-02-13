import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MuiNextLink from '@src/Link'
import Box from '@mui/material/Box'
import Github from '@mui/icons-material/GitHub'

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
      </Stack>
      <Typography align='center' color='common.white'>
        &copy; 1994 - {new Date().getFullYear()}, De West Sakura Restaurant
      </Typography>
    </Box>
  )
}
