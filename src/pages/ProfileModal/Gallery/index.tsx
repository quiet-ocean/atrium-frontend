import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../MuiTheme'

const Gallery: React.FC = () => {
  return (
    /* eslint-disable-next-line prettier/prettier */
    <Box sx={{ backgroundColor: palette.wedget.background, border: `2px solid ${palette.border.dark}`, height: 450, width: 890 }}>
      <Text>Gallery</Text>
    </Box>
  )
}

export default Gallery
