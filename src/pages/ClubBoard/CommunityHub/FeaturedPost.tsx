import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { AText, AButton, EmptyBox } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { IPost } from '../../../types/model'
import { apiGetRequest } from '../../../utils'
import { Reactions } from '../Dashboard'
import { Community as Container } from '../styled'
import { PostContainer } from '../UserProfile'

import { MessageItem } from './'

export const getPost = async (id: string) => {
  if (!id) {
    console.log('Id have not be null to get post data.')
    return
  }
  return await apiGetRequest(
    `${process.env.VITE_API_URL || 'http://localhost:2567'}/posts/${id}`
  )
}
export const FeaturedPost = ({
  data,
  height,
}: {
  data?: null | string | IPost
  height?: string
}) => {
  console.log('Featured post: ', data, ' Type is: ', typeof data)
  const [post, setPost] = useState<IPost>({} as IPost)

  useEffect(() => {
    const init = async () => {
      if (typeof data === 'string') {
        const res = await getPost(data)
        console.log('Loaded featured post data: ', res.data)
        if (res.data) setPost(res.data)
      } else if (typeof data === undefined || data === null) {
        console.log('Post data is null')
      } else if(typeof data === 'object' && data !== null) {
        setPost(data)
      }
    }
    init()
  }, [data])
  return (
    <Container height="100%">
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
        {post ? (
          <>
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
          </>
        ) : (
          <EmptyBox>No Featured Post</EmptyBox>
        )}
      </Box>
    </Container>
  )
}
