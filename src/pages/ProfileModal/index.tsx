import { Container, Box } from '@mui/material'
import React from 'react'

import './reset.css'
import { palette } from '../../MuiTheme'

import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar/index'
import * as Styld from './styled'

const ProfileModal: React.FC = () => {
  return (
    <Container
      sx={{
        bgcolor: palette.background.default,
        height: '100%',
        width: '100%',
      }}
    >
      <>
        <SearchAppBar />
        <SideBar />
      </>
      <Styld.GridContainer>
        <Box sx={{ backgroundColor: 'green', gridArea: 'main' }}></Box>

        <Box sx={{ backgroundColor: 'blue', gridArea: 'carousel' }}></Box>
        <Box sx={{ backgroundColor: 'darkcyan', gridArea: 'livechat' }}></Box>
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
