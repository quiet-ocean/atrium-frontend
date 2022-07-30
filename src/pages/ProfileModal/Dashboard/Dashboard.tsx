import { Box, Typography } from '@mui/material'

import reactions from '../../../assets/icons/reactions.png'
import land1 from '../../../assets/images/land-1.png'
import land2 from '../../../assets/images/land-2.png'
import land3 from '../../../assets/images/land-3.png'
import post1 from '../../../assets/images/post-1.png'
import post2 from '../../../assets/images/post-2.png'
import post3 from '../../../assets/images/post-3.png'
import post4 from '../../../assets/images/post-4.png'
import { AtText } from '../../../components'
import post5 from '../images/post-image.png'
import * as PContainer from '../styled'
import { PostContainer } from '../UserProfile/PostCarousel'

import { HorizontalPostComp } from './HorizontalPostComp'
import { Container } from './styled'
import { Title } from './Title'
import { User } from './User'

export const Dashboard = () => {
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
        <Box flex="2">
          <PostContainer img={post3} height="480px">
            <Title>How I stay ahead on quests</Title>
            <Box mt="12px">
              <User name="swiftyyy" />
            </Box>
          </PostContainer>
        </Box>
        <Box flex="2">
          <PostContainer img={post4} height="480px">
            <Title>Why bounties mean everything</Title>
            <Box mt="12px">
              <User name="swiftyyy" />
            </Box>
          </PostContainer>
        </Box>
        <Box
          flex="3"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <HorizontalPostComp img={land1} />
          <HorizontalPostComp img={land2} />
          <HorizontalPostComp img={land3} />
        </Box>
      </Container>
      <Container>
        <Box width="100%">
          <PostContainer img={post5} height="350px">
            <AtText>Project 1</AtText>
          </PostContainer>
        </Box>
        <Box width="100%">
          <PostContainer img={post5} height="350px">
            <AtText>Project 1</AtText>
          </PostContainer>
        </Box>
        <Box width="100%">
          <PostContainer img={post5} height="350px">
            <AtText>Project 1</AtText>
          </PostContainer>
        </Box>
      </Container>
    </PContainer.Main>
  )
}
