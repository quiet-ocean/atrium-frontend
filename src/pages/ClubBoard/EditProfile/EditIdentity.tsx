import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Typography, Grid } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'

import { Button, TextField } from '../../../components'
import { useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'

import { TextPanel } from './EditContent'
import { EditProfileLayout } from './EditProfileLayout'
import { AntSwitch } from './styled'
// import { AntSwitch } from '../Chat/AntSwitch'<Icon sx={{ fontSize: '32px' }}>discord</Icon>

export const EditIdentity = () => {
  const user = useAppSelector((state) => state.auth.user)

  const SocialConnect = ({
    title,
    icon,
  }: {
    title: string
    icon: React.ReactNode
  }) => {
    return (
      <Box>
        <Button
          className="primary outlined"
          sx={{ padding: '24px 48px', width: '100%' }}
          color0btn={palette.text.primary}
        >
          <Box display="flex" gap="20px">
            {icon}
            <Typography p="5px" variant="h5">
              {title} Connected
            </Typography>
          </Box>
        </Button>
        <Box
          p="16px 24px"
          display="flex"
          gap="12px"
          width="100%"
          justifyContent="center"
        >
          <AntSwitch />
          <Typography variant="caption" py="2px">
            Displayed on Profile
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h6"
            color={palette.text.disabled}
            sx={{ textDecoration: 'underline' }}
          >
            Disconnect {title}
          </Typography>
        </Box>
      </Box>
    )
  }

  return (
    <EditProfileLayout
      title="Identity Information"
      subtitle="Edit the top information featured on your profile. "
    >
      <Box>
        <Typography variant="h6">Nickname</Typography>
        <Box py="12px">
          <Grid container>
            <Grid item lg={6}>
              <TextField className="rounded dark" value={user.username} />
            </Grid>
            <Grid item lg={6} />
          </Grid>
        </Box>
      </Box>
      <Box mt="32px">
        <Typography variant="h6">Bio</Typography>
        <TextPanel>
          <Typography variant="body1" color={palette.text.primary}>
            {user.bio}
          </Typography>
        </TextPanel>
      </Box>
      <Box mt="90px">
        <Typography variant="h4">Links</Typography>
        <Grid container spacing={`24px`} mt="24px">
          <Grid item lg={6}>
            <Box>
              <Typography variant="h6">website url</Typography>
              <Box py="12px">
                <TextField className="rounded default" value={user.webUrl} />
              </Box>
              <Box p="0px 24px" display="flex" gap="12px">
                <AntSwitch />
                <Typography variant="caption" py="2px">
                  Displayed on Profile
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box>
              <Typography variant="h6">email</Typography>
              <Box py="12px">
                <TextField className="rounded default" value={user.email} />
              </Box>
              <Box p="0px 24px" display="flex" gap="12px">
                <AntSwitch />
                <Typography variant="caption" py="2px">
                  Notifications On
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={`24px`} mt="32px">
          <Grid item lg={4}>
            <SocialConnect
              title="discord"
              icon={<Icon sx={{ fontSize: '32px' }}>discord</Icon>}
            />
          </Grid>
          <Grid item lg={4}>
            <SocialConnect
              title="twitter"
              icon={<TwitterIcon sx={{ fontSize: '32px' }} />}
            />
          </Grid>
          <Grid item lg={4}>
            <SocialConnect
              title="instagram"
              icon={<InstagramIcon sx={{ fontSize: '32px' }} />}
            />
          </Grid>
        </Grid>
      </Box>
    </EditProfileLayout>
  )
}
