import { Box, Typography, Grid } from '@mui/material'
import { AButton, ATextField } from '../../../components'
import { palette } from '../../../MuiTheme'
import { TextPanel } from './EditContent'
import { EditProfileLayout } from './EditProfileLayout'
import { AntSwitch } from './styled'
import Icon from '@mui/material/Icon'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
// import { AntSwitch } from '../Chat/AntSwitch'<Icon sx={{ fontSize: '32px' }}>discord</Icon>
export const EditIdentity = () => {
  const SocialConnect = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
      <Box>
        <AButton className='primary outlined' sx={{ width: '100%', padding: "24px 48px"}} color0btn={palette.text.primary}>
          <Box display="flex" gap="20px">
            {icon}
            <Typography p="5px" variant="h5">{title} Connected</Typography>
          </Box>
        </AButton>
        <Box p="16px 24px" display="flex" gap="12px" width="100%" justifyContent="center">
          <AntSwitch />
          <Typography variant="caption" py="4px">Displayed on Profile</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h6" color={palette.text.disabled} sx={{ textDecoration: 'underline'}}>Disconnect {title}</Typography>
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
        <ATextField />
      </Box>
      <Box mt="32px">
        <Typography variant="h6">Bio</Typography>
        <TextPanel>
          <Typography variant="body1" color={palette.text.primary}>
            Your favorite degen’s favorite degen. Exclusively on NEAR. DMs open!a,dmsnfkasndf
          </Typography>
        </TextPanel>
      </Box>
      <Box mt="90px">
        <Typography variant="h4">Links</Typography>
        <Grid container spacing={`24px`} mt="24px">
          <Grid item lg={6}>
            <Box>
              <Typography variant="h6">website url</Typography>
              <ATextField />
              <Box p="12px 24px" display="flex" gap="12px">
                <AntSwitch />
                <Typography variant="caption" py="4px">Displayed on Profile</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box>
              <Typography variant="h6">website url</Typography>
              <ATextField />
              <Box p="12px 24px" display="flex" gap="12px">
                <AntSwitch />
                <Typography variant="caption" py="4px">Displayed on Profile</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={`24px`} mt="32px">
          <Grid item lg={4}>
            <SocialConnect title='discord' icon={<Icon sx={{ fontSize: '32px' }}>discord</Icon>} />
          </Grid>
          <Grid item lg={4}>
            <SocialConnect title='twitter' icon={<TwitterIcon sx={{ fontSize: '32px' }} />} />
          </Grid>
          <Grid item lg={4}>
            <SocialConnect title='instagram' icon={<InstagramIcon sx={{ fontSize: '32px' }} />} />
          </Grid>
        </Grid>
      </Box>
    </EditProfileLayout>
  )
}
{/* <TwitterIcon sx={{ fontSize: '32px' }} />
                          <Icon sx={{ fontSize: '32px' }}>discord</Icon>
                          <InstagramIcon sx={{ fontSize: '32px' }} /> */}