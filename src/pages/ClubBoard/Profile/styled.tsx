import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import banner from '../../../assets/images/banner-3.png'
export const Banner = () => {
  return (
    <Box position="relative">
      <Box>
        <img src={banner} alt="" width="100%" height="250px" />
      </Box>
    </Box>
  )
}

export const Text = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  fontFamily: 'Andale Mono Regular',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '-0.05em',
  lineHeight: '120%',
}))
