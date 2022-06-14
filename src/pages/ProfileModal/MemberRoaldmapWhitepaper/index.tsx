import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import type { SxProps } from '@mui/system'
import React from 'react'

import { palette } from '../../../MuiTheme'

import Members from './Members'
import Roadmap from './Roadmap'
import Whitepaper from './Whitepaper'

interface Props {
  sx: SxProps
}

const MemberRoaldmapWhitepaper: React.FC<Props> = ({ sx }) => {
  return (
    <Box sx={sx}>
      {/* eslint-disable-next-line prettier/prettier */}
      <Members sx={{ border: `2px solid ${palette.border.dark}`, display: 'flex', flexDirection: 'column', height: 210, width: 450, }}/>
      <Roadmap />
      <Whitepaper />
    </Box>
  )
}

export default MemberRoaldmapWhitepaper
