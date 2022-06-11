import { Container } from '@mui/material'
import React from 'react'

import './reset.css'
import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar/index'

const ProfileModal: React.FC = () => {
  return (
    <Container sx={{ bgcolor: '#16161A', height: '100%', width: '100%' }}>
      <SearchAppBar />
      <SideBar />
    </Container>
  )
}

export default ProfileModal
