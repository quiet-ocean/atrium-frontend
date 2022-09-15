import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import coolcat from '../../../assets/icons/reaction-coolcat.png'
import seemsgood from '../../../assets/icons/reaction-seemsgood.png'
import smile from '../../../assets/icons/reaction-smile.png'
import reactions from '../../../assets/icons/reactions.png'
import land1 from '../../../assets/images/land-1.png'
import land2 from '../../../assets/images/land-2.png'
import land3 from '../../../assets/images/land-3.png'
import post2 from '../../../assets/images/post-2.png'
import { AText, HoverBox } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { setCurrentPost } from '../../../stores/AppStore'
import { setCommunity } from '../../../stores/CommunityStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { ICommunity, IFile, IPost } from '../../../types/model'
import { apiGetRequest, apiUrl } from '../../../utils'
import * as PContainer from '../styled'
import { PostContainer } from '../UserProfile/PostCarousel'

import { HorizontalPostComp } from './HorizontalPostComp'
import { Container } from './styled'
import { Title } from './Title'
import { User } from './User'

export const Reactions = () => {
  return (
    <Box display="flex" gap="4px">
      <img src={smile} alt="" width="18px" height="18px" />
      <img src={seemsgood} alt="" width="18px" height="18px" />
      <img src={coolcat} alt="" width="18px" height="18px" />
      <Typography
        sx={{
          color: '#FFFFFF',
          fontFamily: 'Andale Mono Regular',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '19px',
        }}
      >
        +204
      </Typography>
    </Box>
  )
}

const DetailedPost = ({ data }: { data?: IPost }) => {
  return (
    <PostContainer img={`${(data?.media as IFile)?.path}`}>
      <Box display="flex" gap="12px">
        <Box>
          <Title>{data?.title || `Taking advantage of your clan`}</Title>
          <Typography variant="h6">
            {data?.body ||
              `Tips on how to network and make the most of your Atrium connections.{' '}`}
          </Typography>
        </Box>
        <Box
          p="40px 12px 0px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="end"
        >
          <img src={reactions} alt="" />
        </Box>
      </Box>
    </PostContainer>
  )
}
const SimplePost = ({ data }: { data?: IPost }) => {
  return (
    <PostContainer img={`${(data?.media as IFile)?.path}`}>
      <Typography variant="h4">
        {data?.title || `How Atrium’s Tokenomics work and why you should ...`}
      </Typography>
      <Box mt="12px">
        <User data={data?.author} />
      </Box>
    </PostContainer>
  )
}
export const Dashboard = () => {
  const dispatch = useAppDispatch()
  const [communities, setCommunities] = useState<ICommunity[]>([])
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      getCommunities()
      getPosts()
    }
    return () => {
      isMounted = false
    }
  })

  const getPosts = async () => {
    const res = await apiGetRequest(`${apiUrl}/posts`)

    if (res.status === 200 && res.data) {
      setPosts(res.data)
    } else {
      console.log('error occurred while load posts data in dashboard')
    }
  }
  const getCommunities = async () => {
    const res = await apiGetRequest(`${apiUrl}/communities`)

    if (res.status === 200 && res.data) {
      setCommunities(res.data)
    } else {
      console.log('error occurred while load community data in dashboard')
    }
  }
  const handleLinkCommunity = (data: ICommunity) => {
    dispatch(setCommunity(data))
    dispatch(setCurrentBoardTab(5))
  }

  const handleLinkPost = (post: IPost | undefined) => {
    if (post) {
      dispatch(setCurrentPost(post))
      dispatch(setCurrentBoardTab(6))
    } else {
      console.log('null')
    }
  }

  return (
    <PContainer.Main>
      <Container>
        <HoverBox flex="3" onClick={() => handleLinkPost(posts[0])}>
          <DetailedPost data={posts[0]} />
        </HoverBox>
        <HoverBox flex="2" onClick={() => handleLinkPost(posts[1])}>
          <SimplePost data={posts[1]} />
        </HoverBox>
        <Box flex="2">
          <PostContainer
            img={post2}
            children={<Typography>members</Typography>}
          />
        </Box>
      </Container>
      <Container>
        <HoverBox flex="2" onClick={() => handleLinkPost(posts[2])}>
          <SimplePost data={posts[2]} />
        </HoverBox>
        <HoverBox flex="2" onClick={() => handleLinkPost(posts[3])}>
          <SimplePost data={posts[3]} />
        </HoverBox>
        <HoverBox
          flex="3"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          onClick={() => handleLinkPost()}
        >
          <HorizontalPostComp img={land1} onClick={handleLinkPost} />
          <HorizontalPostComp img={land2} onClick={handleLinkPost} />
          <HorizontalPostComp img={land3} onClick={handleLinkPost} />
        </HoverBox>
      </Container>
      <Container>
        {communities &&
          communities.length > 0 &&
          communities.slice(0, 3).map((item: ICommunity, key: number) => (
            <HoverBox
              width="100%"
              onClick={() => handleLinkCommunity(item)}
              key={key}
            >
              <PostContainer
                img={`${apiUrl}/files/${item?.logoUrl}`}
                height="350px"
              >
                <AText>{item.name}</AText>
              </PostContainer>
            </HoverBox>
          ))}
      </Container>
    </PContainer.Main>
  )
}
