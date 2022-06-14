import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import React from 'react'

import muiTheme from '../../../../MuiTheme'

import memberImg from './images/member1.png'

const Card: React.FC = () => {
  return (
    /* eslint-disable-next-line prettier/prettier */
    <Box sx={{border: '2px solid', borderColor: muiTheme.palette.border.dark, display: 'flex', flexDirection: 'row',height: 80, width: 270 }}>
      <img width={78} height={80} src={memberImg} />
      <Box sx={{ height: 80, width: 200 }}>
        <Text
          variant="h6"
          sx={{ color: '#fff', fontWeight: 'boid', padding: '10px' }}
        >
          SnowStorm
        </Text>
      </Box>
    </Box>
  )
}

export default Card
