import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Home from '@mui/icons-material/Home'
import { styled } from '@mui/system'
import Fab from '@mui/material/Fab'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'

import MuiNextLink from '@src/Link'
import Navbar from './header/Navbar'
import SideDrawer from './header/SideDrawer'
import HideOnScroll from './header/HideOnScroll'
import BackToTop from './header/BackToTop'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)
const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
  { title: 'apps', path: '/apps' },
  { title: 'contact', path: '/contact' },
]

function Header() {
  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <IconButton edge='start' aria-label='home'>
                <MuiNextLink activeClassName='active' href='/'>
                  <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize='large'
                  />
                </MuiNextLink>
              </IconButton>

              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id='back-to-top-anchor' />
      <BackToTop>
        <Fab color='secondary' size='large' aria-label='back to top'>
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  )
}

export default Header;
