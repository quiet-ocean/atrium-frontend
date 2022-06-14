import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import type { SxProps } from '@mui/system'
import React from 'react'

import { palette } from '../../../MuiTheme'

interface Props {
  sx: SxProps
}

const Gallery: React.FC<Props> = ({ sx }) => {
  return (
    <Box sx={{ ...sx, border: `2px solid ${palette.border.dark}` }}>
      <Text>Gallery</Text>
    </Box>
  )
}

export default Gallery
