import { Box } from '@mui/material'
import { Stepper } from '../../components'

import logo from '../../assets/images/atrium-logo-large.png'
import logotype from '../../assets/images/atrium-logotype-small.png'

export const LoginSubLayout = ({ children, stepper }: { children: React.ReactNode, stepper?: boolean }) => {
  return (
    <Box
      height="100%"
      p="36px"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& div': { display: 'flex', justifyContent: 'center' },
      }}
    >
      <Box display='flex' flexDirection='column'>
        <Box>
          <img src={logo} alt="" width="64px" height={64} />
        </Box>
        <Box mt="36px">
          <img src={logotype} alt="" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box height="100%">
          {children}
        </Box>
      </Box>
      <Box display={`${stepper ? 'flex': 'none' }`}>
        <Stepper length={4} step={0} />
      </Box>
    </Box>
  )
}
