import React from 'react'
import { Outlet } from 'react-router-dom'

import './reset.css'

import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar'
import * as Container from './styled'
import Box from '@mui/material/Box'
// import Box from '@mui/material/Box'
interface Props {
  onClose: () => void
}
/* eslint-disable prettier/prettier */
const ProfilePage: React.FC<Props> = ({onClose}) => {
  return (
    <Container.Root>
      <div>
        <SearchAppBar onClose={onClose}/>
      </div>
      <Box>
        <SideBar />
        <Outlet />
      </Box>
    </Container.Root>
  )
}
/* eslint-enable prettier/prettier */

export default ProfilePage
