import Box from '@mui/material/Box'
import React from 'react'

import {
  EditProfile,
  Profile,
  CommunityHub,
  Dashboard,
  // Account,
  ArticleBuilder,
  FeedbackForm,
  UserProfile,
  Chat,
  Post,
  SinglePost,
  SearchUI,
} from '..'
import { useAppSelector } from '../../../hooks'
import { TabPanel } from '../EditProfile/styled'
import '../reset.css'
import SearchAppBar from '../SearchAppBar'
import * as Container from '../styled'

export const ClubBoard: React.FC = () => {
  const value = useAppSelector((state) => state.ui.currentBoardTab) || 0
  const searchUiOpen = useAppSelector((state) => state.ui.searchUiOpen)
  return (
    <Container.Root>
      <div>
        <SearchAppBar />
      </div>
      <Box>
        <Box position="relative">
          <TabPanel value={value} index={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Post />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Chat />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <EditProfile />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <CommunityHub />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <SinglePost />
          </TabPanel>
          <TabPanel value={value} index={7}>
            <UserProfile />
          </TabPanel>
          <TabPanel value={value} index={8}>
            <ArticleBuilder />
          </TabPanel>
          <TabPanel value={value} index={9}>
            <FeedbackForm />
          </TabPanel>
          <Box
            sx={{
              display: searchUiOpen ? 'block' : 'none',
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              paddingLeft: '80px',
            }}
          >
            <SearchUI open={searchUiOpen} />
          </Box>
        </Box>
      </Box>
    </Container.Root>
  )
}
