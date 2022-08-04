import { Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import logo from '../../assets/images/atrium-logo-large.png'
import logotype from '../../assets/images/atrium-logotype-small.png'
import { AButton, Stepper } from '../../components'

import { palette } from '../../MuiTheme'

export const LoginSubLayout = ({
  children,
  stepper,
  goForward,
  goBack,
  enable,
}: {
  children: React.ReactNode
  stepper?: boolean
  goForward?: AnyFunction
  goBack?: AnyFunction
  enable?: boolean
}) => {

  const handleBack = () => {
    if(goBack) goBack()
  }
  const handleForward = () => {
    if(goForward && enable) goForward()
  }
  return (
    <Box
      height="100%"
      p="36px"
      sx={{
        '& div': { display: 'flex', justifyContent: 'center' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box>
          <img src={logo} alt="" width="64px" height={64} />
        </Box>
        <Box mt="36px">
          <img src={logotype} alt="" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box height="100%">{children}</Box>
      </Box>
      <Box>
        <Box display={`${stepper ? 'flex' : 'none !important'}`} flexDirection="column" gap="32px">
          <Box>
            <AButton onClick={handleForward} className="primary active large" color0btn={enable ? palette.secondary.light : palette.text.disabled}>
              Next &nbsp;<ArrowForwardIcon sx={{fontSize: '28px'}} />
            </AButton>
          </Box>
          <Box>
            <Box onClick={handleBack}>
              <ArrowBackIcon />
              <Typography variant="body1" color={palette.text.primary} textTransform="capitalize">
                &nbsp;go back
              </Typography>
            </Box>
            </Box>
          <Box>
            <Stepper length={4} step={2} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
