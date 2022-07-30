import { Box, Typography, styled } from '@mui/material'

import land1 from '../../../assets/images/land-1.png'
import land2 from '../../../assets/images/land-2.png'
import land3 from '../../../assets/images/land-3.png'
import post1 from '../../../assets/images/post-1.png'
import post2 from '../../../assets/images/post-2.png'
import post3 from '../../../assets/images/post-3.png'
import post4 from '../../../assets/images/post-4.png'
import { AtText } from '../../../components'
import avatar from '../images/profile-avatar.png'
import * as PContainer from '../styled'
import { PostContainer } from '../UserProfile/PostCarousel'

const Container = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
  padding: '24px',
}))

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'Fractul Alt',
          fontSize: '36px',
          fontWeight: '600',
          lineHeight: '105%',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
const User = ({ name }: { name: string }) => {
  return (
    <Box display="flex">
      <Box width="24px" height="24px">
        <img src={avatar} alt="" width="100%" height="100%" />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Fractul Alt',
          fontSize: '16px',
          fontWeight: '600',
          letterSpacing: '0em',
          lineHeight: '17px',
          padding: '3px 10px',
          textAlign: 'left',
        }}
      >
        {name}
      </Typography>
    </Box>
  )
}
const HorizontalPostComp = ({ img }: { img: string }) => {
  return (
    <Box position="relative">
      <img src={img} alt="" width="100%" /*height="100%"*/ />
      <Box
        position="absolute"
        top="0px"
        display="flex"
        gap="24px"
        p="12px 24px"
      >
        <Typography
          sx={{
            fontFamily: 'Fractul Alt',
            fontSize: '32px',
            fontWeight: '600',
            letterSpacing: '0em',
            lineHeight: '34px',
            textAlign: 'left',
          }}
        >
          I will win your land and your girl
        </Typography>
        <User name="swiftyyy" />
      </Box>
    </Box>
  )
}
export const Dashboard = () => {
  return (
    <PContainer.Main>
      <Container>
        <Box flex="3">
          <PostContainer
            img={post1}
            children={
              <Box display="flex">
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
              </Box>
            }
          />
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
          <PostContainer img={post3} height="350px">
            <Title>How I stay ahead on quests</Title>
            <Box mt="12px">
              <User name="swiftyyy" />
            </Box>
          </PostContainer>
        </Box>
        <Box flex="2">
          <PostContainer img={post4} height="350px">
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
    </PContainer.Main>
  )
}
