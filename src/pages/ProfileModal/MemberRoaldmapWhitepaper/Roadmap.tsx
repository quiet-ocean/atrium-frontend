import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../MuiTheme'

const Roadmap = () => {
  return (
    <Box
      sx={{
        border: `2px solid ${palette.border.dark}`,
        display: 'flex',
        flexDirection: 'column',
        height: 210,
        justifyContent: 'flex-end',
        width: 210,
        padding: '12px',
      }}
    >
      <Text
        variant="h5"
        sx={{
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Roadmap
      </Text>
    </Box>
  )
}

export default Roadmap
