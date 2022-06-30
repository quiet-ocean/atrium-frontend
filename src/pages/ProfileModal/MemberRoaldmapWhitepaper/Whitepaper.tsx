import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../MuiTheme'

const Whitepaper = () => {
  return (
    <Box
      sx={{
        border: `2px solid ${palette.border.dark}`,
        display: 'flex',
        flexDirection: 'column',
        height: 210,
        justifyContent: 'flex-end',
        padding: '12px',
        width: 210,
      }}
    >
      <Text
        variant="h5"
        sx={{
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Whitepaper
      </Text>
    </Box>
  )
}

export default Whitepaper
