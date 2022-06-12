import { Box } from '@mui/material'
import React from 'react'

import './reset.css'

import Carousel from './Carousel'
import mainImg from './images/main.png'
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
            width: '715px',
          }}
        >
          <Carousel />
        </Box>

        <Box
          sx={{
            backgroundColor: 'darkcyan',
            gridArea: 'livechat',
            height: '380px',
            width: '715px',
          }}
        ></Box>

        <Box
          sx={{
            display: 'flex',
            gridArea: 'flex',
            height: '100%',
            width: '100%',
          }}
        >
          <Box
            sx={{ backgroundColor: 'black', height: 500, width: '70%' }}
          ></Box>
          <Box
            sx={{ backgroundColor: 'lightBlue', flexShrink: 0, width: '30%' }}
          ></Box>
        </Box>
      </Styld.LayoutRoot>
    </Styld.ProfileModalRoot>
  )
}

export default ProfileModal
