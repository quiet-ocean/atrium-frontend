import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import { AntSwitch } from './styled'

export const EditWallet = () => {
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
                <Typography variant="caption" py="2px">Displayed on Profile</Typography>
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
