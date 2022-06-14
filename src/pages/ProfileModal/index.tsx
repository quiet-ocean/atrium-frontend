import { Box } from '@mui/material'
import React from 'react'

import './reset.css'

import Carousel from './Carousel'
import Gallery from './Gallery'
import mainImg from './images/main.png'
import LiveChat from './LiveChat/index'
import MemberRoaldmapWhitepaper from './MemberRoaldmapWhitepaper'
import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar'
import * as Container from './styled'
import Tweets from './Tweets'

/* eslint-disable prettier/prettier */
const ProfileModal: React.FC = () => {
  return (
    <Container.Root>
      <>
        <SearchAppBar />
        <SideBar />
      </>
      <Container.Page>
        <Box sx={{ gridArea: 'main', height: '483px' }}>
          <img src={mainImg} width="1500" height="483" />
        </Box>

        <Box sx={{ gridArea: 'carousel', height: '380px', marginTop: '-28px', width: '715px' }}>
          <Carousel />
        </Box>

        <Box sx={{ gridArea: 'livechat', height: '380px', marginTop: '-28px', width: '770px', }}>
          <LiveChat />
        </Box>

        <Box sx={{ display: 'flex',gridArea: 'flex', height: '770px', marginTop: '-28px', width: '1500px', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <MemberRoaldmapWhitepaper />
            <Gallery />
          </Box>
          <Tweets />
        </Box>
      </Container.Page>
    </Container.Root>
  )
}
/* eslint-enable prettier/prettier */

export default ProfileModal
