import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import { AntSwitch } from './styled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const EditWallet = () => {
  const InfoItem = ({ index, children }: { index: string, children: React.ReactNode }) => {
    return (
      <Box display="flex" py="8px">
        <Typography variant="body2" width="175px" sx={{ textTransform: 'capitalize' }}>{ index }</Typography>
        {children}
      </Box>
    )
  }
  return (
    <Box>
      <Grid container>
        <Grid item lg={6}>
          <Box>
            <Typography variant="h3">Wallet Connection</Typography>
            <Typography variant="body2" mt="16px">
              Details on your wallet source and connection.
            </Typography>
            <Box p="24px 80px">
              <InfoItem index='status'>
                <Box display="flex" gap="8px">
                 <CheckCircleIcon sx={{color: '#90E487'}} />
                 <Typography variant="h5" py="2px" color="#90E487">
                   connected
                 </Typography>
               </Box>
              </InfoItem>
              <InfoItem index="wallet id">
                <Typography variant="h5">swiftyyy.near</Typography>
              </InfoItem>
              <InfoItem index="wallet source">
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>near</Typography>
              </InfoItem>
              <Box mt="32px">
                <Typography variant="h6" color={palette.text.disabled} sx={{ textDecoration: 'underline'}}>Disconnect Wallet</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box>
            <Typography variant="h3">Privacy</Typography>
            <Typography variant="body2" mt="16px">
            If private, only friends can message you. 
If public, anyone on Atrium can message you. 
            </Typography>
            <Box p="24px 0px">
              <Box display="flex" gap="12px">
                <AntSwitch />
                <Typography variant="caption" py="2px">Private</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="end">
        <AButton
          className="primary active medium"
          color0btn={palette.secondary.light}
        >
          save changes
        </AButton>
      </Box>
    </Box>
  )
}
