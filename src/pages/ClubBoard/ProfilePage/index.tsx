import Box from '@mui/material/Box'
import React from 'react'

import { EditProfile, Profile, CommunityHub } from '../'
import { useAppSelector } from '../../../hooks'
import { TabPanel } from '../EditProfile/styled'
import '../reset.css'
import SearchAppBar from '../SearchAppBar'
import * as Container from '../styled'

const ProfilePage: React.FC = () => {
  const value = useAppSelector((state) => state.ui.currentBoardTab) || 0

  return (
    <Container.Root>
      <div>
        <SearchAppBar />
      </div>
      <Box>
        <Box position="relative">
          <TabPanel value={value} index={0}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CommunityHub />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <EditProfile />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <EditProfile />
          </TabPanel>
        </Box>
      </Box>
    </Container.Root>
  )
}

export default ProfilePage
