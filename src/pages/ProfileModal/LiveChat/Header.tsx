import PushPinIcon from '@mui/icons-material/PushPin'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Text from '@mui/material/Typography'
import React from 'react'

import muiTheme from '../../../MuiTheme'

const Header: React.FC = () => (
  <>
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
  </>
)

export default Header
