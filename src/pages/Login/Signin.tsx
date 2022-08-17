import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { LoginLayout, AButton } from '../../components'
import { palette } from '../../MuiTheme'

import { LoginSubLayout } from './LoginSubLayout'

export const Signin = () => {
  return (
    <LoginLayout>
      <LoginSubLayout>
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">sign in</Typography>
          </Box>
          <Box flexDirection="column" mt="64px" gap="24px">
            <AButton
              className="primary active large"
              color0btn={palette.secondary.light}
              component={Link}
              to="/connect-wallet"
            >
              <Typography variant="h2" color={palette.background.paper}>
                connect wallet
              </Typography>
            </AButton>
            <AButton
              className=" active large secondary"
              color0btn={palette.secondary.light}
            >
              <Typography variant="h2">continue as guest</Typography>
            </AButton>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}
