import { Box, Typography } from '@mui/material'

import { AText, AButton, EmptyBox } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { IPost } from '../../../types/model'
import { Reactions } from '../Dashboard'
import { Community as Container } from '../styled'
import { PostContainer } from '../UserProfile'

import { MessageItem } from './'

export const FeaturedPost = ({
  post,
  height,
}: {
  post?: null | IPost
  height?: string
}) => {
  return (
    <Container height="100%">
      {post ? (
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">featured post</Typography>
            <Box>
              <AButton
                className="primary outlined"
                color0btn={palette.secondary.light}
              >
                view all posts
              </AButton>
            </Box>
          </Box>
          <Box pt="40px">
            <PostContainer img={post.media} height={height ? height : ''}>
              <Box display="flex" gap="24px">
                <Box>
                  <AText>{post.title}</AText>
                  <AText className="disabled">{post.body} </AText>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="end">
                  <Reactions />
                </Box>
              </Box>
            </PostContainer>
            <Box pt="16px">
              <MessageItem user={post.author} />
            </Box>
          </Box>
        </>
      ) : (
        <EmptyBox>No Featured Post</EmptyBox>
      )}
    </Container>
  )
}
