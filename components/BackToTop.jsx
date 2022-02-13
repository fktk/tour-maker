import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'
import Box from '@mui/material/Box'

export default function BackToTop({ children }) {
  const trigger = useScrollTrigger()

  function handleClick(event) {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        { children }
      </Box>
    </Zoom>
  )

}
