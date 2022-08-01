import { Box } from '@mui/material'

import { PostItem } from './PostItem'

export const Post = () => {
  return (
    <Box sx={{ margin: '160px 0px 0px 80px'}}>
      <Box p="60px 180px">
        <Box p="24px">
          <PostItem variant="long" />
        </Box>
        <Box p="24px">
          <PostItem variant="short" />
        </Box>
        <Box p="24px">
          <PostItem variant="long" />
        </Box>
        <Box p="24px">
          <PostItem variant="short" />
        </Box>
      </Box>
    </Box>
  )
}