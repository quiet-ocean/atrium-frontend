import { Box, Grid, Container } from '@mui/material'

import avatar from '../images/profile-avatar.png'
import landingBg from '../images/profile-landing-image.png'

import {
  Community,
  PostCarousel,
  ProjectCarousel,
  FriendList,
  Skills,
  Media,
} from './'

export const UserProfile = () => {
  return (
    <Box sx={{ mt: '160px', pl: '80px' }}>
      <Box sx={{ position: 'relative' }}>
        <img src={landingBg} alt="" width="100%" />
        <Box
          sx={{
            bottom: '0px',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
          }}
        >
          <img src={avatar} alt="" />
        </Box>
      </Box>
      <Box>
        <Box pt="12px">
          <Community />
        </Box>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            lg: '24px 120px !important',
            md: '24px 120px !important',
            sm: '24px 0px',
            xs: '24px 0px',
          },
        }}
      >
        <Grid container spacing={'24px'}>
          <Grid item lg={6}>
            <PostCarousel />
            <FriendList />
          </Grid>
          <Grid item lg={6}>
            <ProjectCarousel />
            <Skills />
            <Media />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
