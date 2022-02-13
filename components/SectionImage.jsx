import { Box } from '@mui/material'
import Image from 'next/image'

export default function SectionImage({ imgSrc, imgAlt }) {
  return (
    <Box
      component='section'
      container
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        zIndex: -100,
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout='fill' objectFit='cover' />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0, .3)',
        }}
      >
      </Box>
    </Box>
  )
}
