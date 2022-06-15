import Box from '@mui/material/Box'
import React from 'react'

import Tweet from './Tweet'

const Stream = () => {
  return (
    <Box sx={{ height: 612, overflowY: 'scroll', width: 500 }}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Box>
  )
}

export default Stream
