import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import coolcat from '../../../assets/icons/reaction-coolcat.png'
import seemsgood from '../../../assets/icons/reaction-seemsgood.png'
import smile from '../../../assets/icons/reaction-smile.png'
import reactions from '../../../assets/icons/reactions.png'
import land1 from '../../../assets/images/land-1.png'
import land2 from '../../../assets/images/land-2.png'
import land3 from '../../../assets/images/land-3.png'
import post1 from '../../../assets/images/post-1.png'
import post2 from '../../../assets/images/post-2.png'
import post3 from '../../../assets/images/post-3.png'
import post4 from '../../../assets/images/post-4.png'
import { AText, HoverBox } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { setCommunity } from '../../../stores/CommunityStore'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { ICommunity } from '../../../types/model'
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

export const Dashboard = () => {
  const dispatch = useAppDispatch()
  const [communities, setCommunities] = useState<ICommunity[]>([])

  useEffect(() => {
    let isMounted = true

    if (isMounted) getCommunities()
    return () => {
      isMounted = false
    }
  })

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

  const handleLinkPost = () => {
    dispatch(setCurrentBoardTab(6))
  }

  return (
    <PContainer.Main>
      <Container>
        <Box flex="3">
          <PostContainer img={post1}>
            <Box display="flex" gap="12px">
              <Box>
                <Title>Taking advantage of your clan</Title>
                <Typography
                  sx={{
                    fontFamily: 'Andale Mono Regular',
                    fontSize: '16px',
                    fontWeight: 400,
                    letterSpacing: '-0.05em',
                    lineHeight: '17px',
                    textAlign: 'left',
                  }}
                >
                  Tips on how to network and make the most of your Atrium
                  connections.{' '}
                </Typography>
              </Box>
              <Box p="40px 12px 0px 0px">
                <img src={reactions} alt="" />
              </Box>
            </Box>
          </PostContainer>
        </Box>
        <Box flex="2">
          <PostContainer
            img={post2}
            children={
              <Typography
                sx={{
                  fontFamily: 'Fractul Alt',
                  fontSize: '24px',
                  fontWeight: 600,
                  letterSpacing: '0em',
                  lineHeight: '25px',
                  textAlign: 'left',
                }}
              >
                How Atrium’s Tokenomics work and why you should ...
              </Typography>
            }
          />
        </Box>
        <Box flex="2">
          <PostContainer
            img={post2}
            children={<Typography>members</Typography>}
          />
        </Box>
      </Container>
      <Container>
        <HoverBox flex="2" onClick={handleLinkPost}>
          <PostContainer img={post3} height="480px">
            <Title>How I stay ahead on quests</Title>
            <Box mt="12px">
              <User name="swiftyyy" />
            </Box>
          </PostContainer>
        </HoverBox>
        <HoverBox flex="2" onClick={handleLinkPost}>
          <PostContainer img={post4} height="480px">
            <Title>Why bounties mean everything</Title>
            <Box mt="12px">
              <User name="swiftyyy" />
            </Box>
          </PostContainer>
        </HoverBox>
        <HoverBox
          flex="3"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          onClick={handleLinkPost}
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
