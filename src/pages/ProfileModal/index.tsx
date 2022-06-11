import { Container } from '@mui/system'
import React from 'react'

import './reset.css'
import SearchAppBar from './SearchAppBar'

const ProfileModal: React.FC = () => {
  return (
    <Container sx={{ bgcolor: '#16161A', h: '100%', w: '100%' }}>
      <SearchAppBar />
    </Container>
  )
}

export default ProfileModal
