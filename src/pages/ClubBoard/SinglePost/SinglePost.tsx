import {
  Box,
  // FormControl,
  // InputLabel,
  // OutlinedInput,
  // InputAdornment,
  // IconButton,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'

import { Button, Banner } from '../../../components'
import { useAppSelector } from '../../../hooks'
import type { IComment, IPost } from '../../../types/model'
import { apiUrl, apiGetRequest, apiPostRequest } from '../../../utils/axios'
// import icon2 from '../images/fa-solid_search-1.png'
// import icon1 from '../images/fa-solid_search.png'
import bg from '../images/profile-landing-image.png'
import profileImage from '../images/Rectangle 121.png'
import cardImage from '../images/Rectangle 138.png'
// import icon3 from '../images/Vector.png'
import { Comments } from '../Post/Comments'
import * as PContainer from '../styled'

import { Text, SubHead, HeadButton, Container, Card } from './styled'

const SinglePost = () => {
  const data = useAppSelector((state) => state.app.currentPost)
  const me = useAppSelector((state) => state.auth.user)

  const [post, setPost] = useState<IPost>({} as IPost)

  type GetComments = (postId: string) => Promise<IComment[] | null>
  const getComments: GetComments = async (postId: string) => {
    const res = await apiGetRequest(`${apiUrl}/posts/${postId}/comment/`)

    return res?.data.comments
  }
  useEffect(() => {
    const updateState = async () => {
      if (
        data.comments &&
        data.comments.length &&
        typeof data.comments[0] === 'string'
      ) {
        const _comments = await getComments(data._id)
        console.log(_comments)
        if (_comments) {
          setPost({ ...data, comments: _comments })
          return
        }

        setPost(data)
        return
      }
      setPost(data)
    }
    updateState()
  }, [data])

  const createComment = async (body: string) => {
    const id = data._id
    const res = await apiPostRequest(`${apiUrl}/posts/${id}/comment`, {
      body,
    })

    if (res.status === 200 && res.data) {
      console.log('New comment: ', res.data)
      setPost({
        ...post,
        comments: [...post.comments, { ...res.data, author: me }],
      })
    } else {
      console.log('Something went wrong while create comment')
    }
  }

  return (
    <PContainer.Main>
      <Banner img={bg} />
      <Box>
        <Box sx={{ padding: '0px 180px' }}>
          <Box>
            <Box sx={{ p: '32px' }}>
              <Typography
                variant="h1"
                sx={{ fontSize: 60, textTransform: 'capitalize' }}
              >
                {data?.title}
              </Typography>
              <Box
                sx={{
                  '& button': {
                    fontFamily: 'Andale Mono Regular',
                    fontWeight: 100,
                    textTransform: 'uppercase',
                  },
                  display: 'flex',
                  gap: '12px',
                  padding: '36px 0px',
                }}
              >
                <Button className="primary active">spotify</Button>
                <Button className="primary active">atrium</Button>
                <Button className="primary active">trending news</Button>
                <Button className="primary active">integrations</Button>
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Container>
            <img src={profileImage} alt="" />
            <Text>{data?.body}</Text>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <SubHead>comments</SubHead>
              <HeadButton>See All</HeadButton>
            </Box>
            <Box>
              {post && post.comments && post.comments.length > 0 && (
                <Comments data={post.comments} createComment={createComment} preview={false}/>
              )}
            </Box>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <SubHead>comments</SubHead>
              <HeadButton>See All</HeadButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '36px',
                overflowX: 'auto',
                padding: '24px 0px',
              }}
            >
              <Card sx={{ padding: '24px' }}>
                <img src={cardImage} alt="" />
                <SubHead>spotify integrating with atrium</SubHead>
                <Text>//mar 1st, 2022</Text>
              </Card>
              <Card sx={{ padding: '24px' }}>
                <img src={cardImage} alt="" />
                <SubHead>spotify integrating with atrium</SubHead>
                <Text>//mar 1st, 2022</Text>
              </Card>
              <Card sx={{ padding: '24px' }}>
                <img src={cardImage} alt="" />
                <SubHead>spotify integrating with atrium</SubHead>
                <Text>//mar 1st, 2022</Text>
              </Card>
            </Box>
          </Container>
        </Box>
      </Box>
    </PContainer.Main>
  )
}

export { SinglePost }
