import SearchIcon from '@mui/icons-material/Search'
import { Box, Tabs } from '@mui/material'
import React from 'react'

import { AdornmentInput } from './AdornmentInput'
import { Identity } from './Identity'
import { Heading, TabPanel, a11yProps, CTab } from './styled'
import { Tags } from './Tags'
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
        <AdornmentInput
          adornment={<SearchIcon />}
          label={'Search setting...'}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderColor: 'divider', displayborderBottom: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabItems.map((item: string, key: number) => (
              <CTab label={item} {...a11yProps(key)} key={key} />
            ))}
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
