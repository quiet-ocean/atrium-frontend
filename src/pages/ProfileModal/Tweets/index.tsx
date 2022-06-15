import Box from '@mui/material/Box'
import React from 'react'

import { palette } from '../../../MuiTheme'

const Index: React.FC = () => {
  return (
    <Box /* eslint-disable-next-line prettier/prettier */
      sx={{ backgroundColor: palette.wedget.background, border: `2px solid ${palette.border.dark}`, height: 670,marginLeft: '10px', width: 595, }}>
      Tweets
    </Box>
  )
}

export default Index
