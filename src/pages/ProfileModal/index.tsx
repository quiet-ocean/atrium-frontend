import { Box } from '@mui/material'
import React from 'react'

import './reset.css'

import Carousel from './Carousel'
import mainImg from './images/main.png'
import LiveChat from './LiveChat/index'
import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar/index'
import * as Styld from './styled'

const ProfileModal: React.FC = () => {
  return (
    <Styld.ProfileModalRoot>
      <>
        <SearchAppBar />
        <SideBar />
      </>
      <Styld.LayoutRoot>
        <Box sx={{ gridArea: 'main', height: '483px' }}>
          <img src={mainImg} width="1500" height="483" />
        </Box>

        <Box
          sx={{
            gridArea: 'carousel',
            height: '380px',
            marginTop: '-28px',
            width: '715px',
          }}
        >
          <Carousel />
        </Box>

        <Box
          sx={{
            gridArea: 'livechat',
            height: '380px',
            marginTop: '-28px',
            width: '770px',
          }}
        >
          <LiveChat />
        </Box>

        <Box
          sx={{
            backgroundColor: 'black',
            display: 'flex',
            gridArea: 'flex',
            height: '770px',
            marginTop: '-28px',
            width: '1500px',
          }}
        ></Box>
      </Styld.LayoutRoot>
    </Styld.ProfileModalRoot>
  )
}

export default ProfileModal
