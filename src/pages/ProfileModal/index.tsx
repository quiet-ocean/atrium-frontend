import { Box } from '@mui/material'
import React from 'react'

import './reset.css'

import { palette } from '../../MuiTheme'

import Carousel from './Carousel'
import Gallery from './Gallery/index'
import mainImg from './images/main.png'
import LiveChat from './LiveChat/index'
import MemberRoaldmapWhitepaper from './MemberRoaldmapWhitepaper/'
import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar/index'
import * as Styld from './styled'
import Tweets from './Tweets'

/* eslint-disable prettier/prettier */
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

        <Box sx={{ gridArea: 'carousel', height: '380px', marginTop: '-28px', width: '715px' }}>
          <Carousel />
        </Box>

        <Box sx={{ gridArea: 'livechat', height: '380px', marginTop: '-28px', width: '770px', }}>
          <LiveChat />
        </Box>

        <Box sx={{ display: 'flex',gridArea: 'flex', height: '770px', marginTop: '-28px', width: '1500px', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <MemberRoaldmapWhitepaper sx={{ display: 'flex', gap: '10px', height: 210, width: 890 }}/>
            <Gallery sx={{ backgroundColor: palette.wedget.background, border: `2px solid ${palette.border.dark}`, height: 450, width: 890 }} />
          </Box>
          <Tweets sx={{ backgroundColor: palette.wedget.background, border: `2px solid ${palette.border.dark}`, height: 670, marginLeft: '10px', width: 595 }} />
        </Box>
      </Styld.PageLayoutRoot>
    </Styld.ProfileModalRoot>
  )
}
/* eslint-enable prettier/prettier */

export default ProfileModal
