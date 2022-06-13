import Box from '@mui/material/Box'
import type { SxProps } from '@mui/system'
import React from 'react'

interface Props {
  sx: SxProps
}

const Tweets: React.FC<Props> = ({ sx }) => {
  return <Box sx={sx}>Tweets</Box>
}

export default Tweets
