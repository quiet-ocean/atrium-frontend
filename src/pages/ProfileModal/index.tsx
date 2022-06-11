import { Container, Box } from '@mui/material'
import React from 'react'

import './reset.css'
import { palette } from '../../MuiTheme'

import img from './main.png'
import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar/index'
import * as Styld from './styled'

const ProfileModal: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: palette.background.default,
        height: '100%',
      }}
    >
      <>
        <SearchAppBar />
        <SideBar />
      </>
      <Styld.GridContainer>
        <Box sx={{ gridArea: 'main', height: '386px' }}>
          <img src={img} width="1200" height="386" />
        </Box>

        <Box
          sx={{
            backgroundColor: 'blue',
            gridArea: 'carousel',
            height: '310px',
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: 'darkcyan',
            gridArea: 'livechat',
            height: '310px',
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
            sx={{ backgroundColor: 'orange', height: '100%', width: '70%' }}
          ></Box>
          <Box
            sx={{ backgroundColor: 'lightBlue', flexShrink: 0, width: '30%' }}
          ></Box>
        </Box>
      </Styld.GridContainer>
    </Container>
  )
}

export default ProfileModal
