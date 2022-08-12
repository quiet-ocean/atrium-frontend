import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import React , { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TabPanel, a11yProps } from '../EditProfile/styled'
import '../reset.css'
import { useAppDispatch } from '../../../hooks'
import SearchAppBar from '../SearchAppBar'
import SideBar from '../SideBar'
import * as Container from '../styled'
import { setBoardDialogOpen } from '../../../stores/SettingStore'

import {

  EditProfile,
  Profile,
  CommunityHub,
} from '../'

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setBoardDialogOpen(true))
    setValue(newValue)
  }
  return (
    <Container.Root>
      <div>
        <SearchAppBar />
      </div>
      <Box>
        <SideBar value={value} handleChange={handleChange}/>
        <Box>
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
