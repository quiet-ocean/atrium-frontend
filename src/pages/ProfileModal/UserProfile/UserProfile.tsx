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
        <img src={landingBg} alt="" width="100%" height="715px" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            top: '180px',
            width: '100%',
          }}
        >
          <img src={avatar} alt="" />
        </Box>
        <Box pt="12px">
          <Community />
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ p: '24px !important' }}>
        <Grid container>
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
