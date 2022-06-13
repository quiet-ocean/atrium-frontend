import Box from '@mui/material/Box'
import Text from '@mui/material/Typography'
import type { SxProps } from '@mui/system'
import React from 'react'

import { palette } from '../../../MuiTheme'

interface Props {
  sx: SxProps
}

const MRWContainer: React.FC<Props> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Box
        sx={{
          border: `2px solid ${palette.border.dark}`,
          display: 'flex',
          flexDirection: 'column',
          height: 210,
          width: 450,
        }}
      >
        <Text variant="h5" sx={{ color: '#fff' }}>
          Members
        </Text>
      </Box>
      <Box
        sx={{
          border: `2px solid ${palette.border.dark}`,
          height: 210,
          width: 210,
        }}
      >
        <Text>Roadmap</Text>
      </Box>
      <Box
        sx={{
          border: `2px solid ${palette.border.dark}`,
          height: 210,
          width: 210,
        }}
      >
        <Text>Whitepaper</Text>
      </Box>
    </Box>
  )
}

export default MRWContainer
