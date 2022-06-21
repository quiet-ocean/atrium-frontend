import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Tab,
  Tabs,
} from '@mui/material'
import React from 'react'
import { Identity } from './Identity'
import { Tags } from './Tags'

import { Heading, TabPanel, a11yProps } from './styled'
import { Wallet } from './Wallet'

const tabItems = [
  'all',
  'identity',
  'content',
  'wallet',
  'tags',
  'socials',
  'privacy',
]
const ProfileEdit: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ gridArea: 'main', padding: '64px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading>Edit Profile</Heading>
        <FormControl sx={{ width: '350px' }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{ fontSize: '16px' }}
          >
            Search settings...
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            sx={{ fontSize: '18px', height: '100%' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderColor: 'divider', displayborderBottom: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {
              tabItems.map((item: string, key: number) => (
                <Tab label={item} {...a11yProps(key)} key={key} />
              ))
            }
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          All
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Identity />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Wallet />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Tags />
        </TabPanel>
        <TabPanel value={value} index={5}>
          Socials
        </TabPanel>
        <TabPanel value={value} index={6}>
          Privacy
        </TabPanel>
      </Box>
    </Box>
  )
}

export default ProfileEdit
