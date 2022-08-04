import { Box, Typography } from '@mui/material'

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
            >
              connect wallet
            </AButton>
            <AButton
              className=" active large secondary"
              color0btn={palette.secondary.light}
            >
              continue as guest
            </AButton>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}
