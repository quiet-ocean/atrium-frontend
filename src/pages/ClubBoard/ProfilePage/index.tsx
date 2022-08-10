import Box from '@mui/material/Box'
import React from 'react'
import { Outlet } from 'react-router-dom'

import '../reset.css'

import SearchAppBar from '../SearchAppBar'
// import SideBar from '../SideBar'
import * as Container from '../styled'

const ProfilePage: React.FC = () => {
  return (
    <Container.Root>
      <div>
        <SearchAppBar />
      </div>
      <Box position="relative">
        {/* <SideBar /> */}
        <Outlet />
      </Box>
    </Container.Root>
  )
}

export default ProfilePage
