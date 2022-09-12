import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { LoginLayout, Button } from '../../components'
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
            <Button
              className="primary active large"
              color={palette.secondary.light}
            >
              <Link to="/connect-wallet">
                <Typography variant="h2" color={palette.background.paper}>
                  connect wallet
                </Typography>
              </Link>
            </Button>
            <Button
              className=" active large secondary"
              color={palette.secondary.light}
            >
              <Typography variant="h2">continue as guest</Typography>
            </Button>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}
