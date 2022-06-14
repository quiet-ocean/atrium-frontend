import { Box } from '@mui/material'
import React from 'react'

import './reset.css'

import muiTheme from '../../MuiTheme'

import Carousel from './Carousel'
import Gallery from './Gallery/index'
import mainImg from './images/main.png'
import LiveChat from './LiveChat/index'
import MRWContainer from './MRW/index'
import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar/index'
import * as Styld from './styled'
import Tweets from './Tweets'

const ProfileModal: React.FC = () => {
  return (
    <Styld.ProfileModalRoot>
      <>
        <SearchAppBar />
        <SideBar />
      </>
      <Styld.PageLayoutRoot>
        <Box sx={{ gridArea: 'main', height: '483px' }}>
          <img src={mainImg} width="1500" height="483" />
        </Box>

        {/* eslint-disable-next-line prettier/prettier */}
        <Box sx={{ gridArea: 'carousel', height: '380px', marginTop: '-28px', width: '715px' }}>
          <Carousel />
        </Box>

        {/* eslint-disable-next-line prettier/prettier */}
        <Box sx={{ gridArea: 'livechat', height: '380px', marginTop: '-28px', width: '770px', }}>
          <LiveChat />
        </Box>

        {/* eslint-disable-next-line prettier/prettier */}
        <Box sx={{ display: 'flex',gridArea: 'flex', height: '770px', marginTop: '-28px', width: '1500px', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <MRWContainer
              sx={{ display: 'flex', gap: '10px', height: 210, width: 910 }}
            />
            {/* eslint-disable-next-line prettier/prettier */}
            <Gallery sx={{ backgroundColor: muiTheme.palette.wedget.background, height: 450, width: 890 }} />
          </Box>
          <Tweets sx={{ height: 690, width: 550 }} />
        </Box>
      </Styld.PageLayoutRoot>
    </Styld.ProfileModalRoot>
  )
}

export default ProfileModal
