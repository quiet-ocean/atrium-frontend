import PushPinIcon from '@mui/icons-material/PushPin'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Text from '@mui/material/Typography'
import React from 'react'

import muiTheme from '../../../MuiTheme'

import TimeLine from './TimeLine/index'

const LiveChat: React.FC = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '10px',
        paddingTop: '25px',
        width: '100%',
      }}
      variant="outlined"
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: 'auto',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Text variant="h5" textAlign="center" color="#fff">
          Live Chat
        </Text>
        <Box sx={{ ailgnItem: 'center', display: 'flex' }}>
          <IconButton size="large" sx={{ color: muiTheme.palette.icon.dark }}>
            <PushPinIcon sx={{ transform: 'rotate(0.1turn)' }} />
          </IconButton>
          <IconButton size="large" sx={{ color: muiTheme.palette.icon.dark }}>
            <ZoomOutMapIcon />
          </IconButton>
        </Box>
      </Box>
      <TimeLine />
    </Paper>
  )
}

export default LiveChat
