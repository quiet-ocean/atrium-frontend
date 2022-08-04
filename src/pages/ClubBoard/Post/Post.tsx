import { Box } from '@mui/material'

import bg from '../images/profile-landing-image.png'
import { ModalContainer } from '../styled'

import { PostItem } from './PostItem'

export const Post = () => {
  return (
    <ModalContainer>
      <Box>
        <img src={bg} alt="" width="100%" />
      </Box>
      <Box p="60px 180px">
        <Box p="24px">
          <PostItem />
        </Box>
        <Box p="24px">
          <PostItem />
        </Box>
        <Box p="24px">
          <PostItem />
        </Box>
        <Box p="24px">
          <PostItem />
        </Box>
      </Box>
    </ModalContainer>
  )
}
