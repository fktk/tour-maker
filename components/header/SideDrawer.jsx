import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import MuiNextLink from '@src/Link'
import { useState } from 'react'

function SideDrawer({ navLinks }) {
  const [state, setState] = useState({
    right: false,
  })

  function toggleDrawer(anchor, open) {
    return (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return
      }
    setState({ ...state, [anchor]: open })
    }
  }

  const list = (anchor) => (
    <Stack
      sx={{ width: 250, marginTop: 'auto', marginBottom: 'auto' }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path }, i) => (
        <Typography
          variant='button'
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
            textTransform: 'uppercase',
          }}
        >
          <MuiNextLink sx={{ color: 'common.white' }} href={path}>
            {title}
          </MuiNextLink>
        </Typography>
      ))}
    </Stack>
  )

  return (
    <>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
        sx={{
          color: 'common.white',
          display: { xs: 'inline', md: 'none' }
        }}
      >
        <Menu fontSize='large' />
      </IconButton>
      <Drawer
        anchor='right'
        open={state.right}
        onClick={toggleDrawer('right', false)}
        sx={{
          '.MuiDrawer-paper': {
            bgcolor: 'primary.main',
          },
        }}
      >
        {list('right')}
      </Drawer>
    </>
  )
}

export default SideDrawer
