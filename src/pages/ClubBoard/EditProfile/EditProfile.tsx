import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Tabs, Typography, Tab } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import * as Container from '../styled'

import { Identity } from './Identity'
import { TabPanel, a11yProps } from './styled'
import { Tags } from './Tags'
import { Wallet } from './Wallet'

import { EditContent } from './'

const tabItems = ['content', 'tags', 'identity', 'wallet & privacy']

const tabStyle = {
  '&:first-child': {
    paddingLeft: '0px',
  },
  alignItems: 'flex-start',
  color: palette.text.disabled,
  fontFamily: 'Fractul Alt',
  fontSize: '24px',
  fontWeight: 400,
  justifyContent: 'flex-start',

  lineHeight: '32px',
  // padding: '12px 12px 12px 0px',
  textTransform: 'capitalize',
}

const EditProfile: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Container.Main>
      <Box sx={{ padding: '60px 24px' }}>
        <Box p="32px">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h2" color={palette.secondary.light}>
              edit profile
            </Typography>
            <Box display="flex" gap="24px">
              <AButton
                className="primary active"
                color0btn={palette.text.primary}
              >
                <Link to="/profile-modal-development-sandbox/profile">
                  <Typography
                    variant="h6"
                    sx={{ color: palette.background.paper }}
                  >
                    back to profile
                  </Typography>
                </Link>
                <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </AButton>
              <AButton
                className="primary active"
                color0btn={palette.secondary.light}
              >
                save changes
              </AButton>
            </Box>
          </Box>
          <Box sx={{ borderColor: 'divider', displayborderBottom: 1 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabItems.map((item: string, key: number) => (
                <Tab label={item} {...a11yProps(key)} key={key} sx={tabStyle} />
              ))}
            </Tabs>
          </Box>
        </Box>
        <Box sx={{ width: '100%' }}>
          <TabPanel value={value} index={0}>
            <EditContent />
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
    </Container.Main>
  )
}

export { EditProfile }
