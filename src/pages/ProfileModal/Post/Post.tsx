import { Box } from '@mui/material'

import { PostItem } from './PostItem'
import { ModalContainer } from '../styled'
export const Post = () => {
  return (
    <ModalContainer>
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
    </ModalContainer>
  )
}