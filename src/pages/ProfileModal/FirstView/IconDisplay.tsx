import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../MuiTheme'

import AvaterImg from './Avatar.png'

const IconDisplay = () => {
  return (
    <Box
      sx={{
        backgroundColor: palette.wedget.background,
        display: 'flex',
        gap: '20px',
        height: 60,
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Supply</Text>
        <Text sx={{ fontWeight: 'bold' }}>5000</Text>
      </Paper>
      <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Listed</Text>
        <Text sx={{ fontWeight: 'bold' }}>313</Text>
      </Paper>
      <Box sx={{ bottom: '70px', position: 'relative' }}>
        <img src={AvaterImg} width="160" height="160" />
      </Box>
      <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Floor Price</Text>
        <Text sx={{ fontWeight: 'bold' }}>20</Text>
      </Paper>
      <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Vol. All Time</Text>
        <Text sx={{ fontWeight: '900' }}>93,420</Text>
      </Paper>
    </Box>
  )
}

export default IconDisplay
