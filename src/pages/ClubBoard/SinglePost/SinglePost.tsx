import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useEffect, useState } from 'react'

import { useAppSelector } from '../../../hooks'
import type { IComment, IPost } from '../../../types/model'
import { apiUrl, apiGetRequest } from '../../../utils/axios'
import icon2 from '../images/fa-solid_search-1.png'
import icon1 from '../images/fa-solid_search.png'
import bg from '../images/profile-landing-image.png'
import profileImage from '../images/Rectangle 121.png'
import cardImage from '../images/Rectangle 138.png'
import icon3 from '../images/Vector.png'
import { Comment } from '../Post/Comments'
import * as PContainer from '../styled'

import { Text, Heading, SubHead, HeadButton, Container, Card } from './styled'

const SinglePost = () => {
  const data = useAppSelector((state) => state.app.currentPost)

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

  return (
    <PContainer.Main>
      <Box>
        <Box>
          <img src={bg} alt="" width="100%" />
        </Box>
      </Box>
      <Box>
        <Box sx={{ padding: '0px 180px' }}>
          <Box>
            <Box sx={{ p: '32px' }}>
              <Heading>{data?.title}</Heading>
              <Box sx={{ display: 'flex', gap: '12px', padding: '36px 0px' }}>
                <HeadButton>spotify</HeadButton>
                <HeadButton>atrium</HeadButton>
                <HeadButton>trending news</HeadButton>
                <HeadButton>integrations</HeadButton>
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Container>
            {/* <SubHead>“spotify integrating with atrium”</SubHead> */}
            {/* <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu
              sed et tortor proin. Ac vulputate eget sagittis amet metus feugiat
              vitae. Velit nunc, augue felis interdum integer aliquet commodo
              vel ultrices. Feugiat malesuada tempor euismod et nibh ac laoreet
              urna, cursus. Feugiat nibh non amet, nunc risus faucibus viverra
              hendrerit. Cursus sed est tellus lorem nec vel. Lacinia ut rhoncus
              massa id turpis quisque amet, non.
            </Text> */}
            <img src={profileImage} alt="" />
            <Text>{data?.body}</Text>
          </Container>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <SubHead>comments</SubHead>
              <HeadButton>See All</HeadButton>
            </Box>
            <Box>
              {post &&
                post.comments &&
                post.comments.length > 0 &&
                post?.comments.map((comment: IComment, key: number) => {
                  return <Comment data={comment} key={key} />
                })}
            </Box>
            <Box sx={{ display: 'flex', gap: '24px', padding: '24px 0px' }}>
              <Card sx={{ padding: '24px' }}>
                <img src={icon1} alt="" />
              </Card>
              <Card sx={{ padding: '24px' }}>
                <img src={icon2} alt="" />
              </Card>
              {/* <Card>
              <input style={{
                background: 'transparent',
                border: 'none'
              }} />
              <img src={icon3} alt='' />
            </Card> */}
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ fontSize: '36px', left: '12px', top: '2px' }}
                >
                  Type Here...
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="text"
                  sx={{ fontSize: '42px', height: '100%' }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <img src={icon3} alt="" />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
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
