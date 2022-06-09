import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { LoginLayout, Stepper } from '../components'
import { useAppSelector } from '../hooks'

const LoginSuccess = () => {
  const user = useAppSelector((state) => state.auth.user)
  console.log(user)

  return (
    <LoginLayout>
      <Box sx={{ mb: '50px', textAlign: 'center' }}>
        <img src={(user as any).avatar} alt="" style={{ width: 230 }} />
      </Box>
      <Box sx={{ mb: '50px' }}>
        <Typography className="atrium_title" sx={{ mb: '50px' }} component="h1">
          Welcome Back!
        </Typography>
        <Typography className="atrium_info">Welcome Back to Atrium,</Typography>
        <Typography className="atrium_info">
          {(user as any).username}
        </Typography>
      </Box>
      <Box sx={{ mb: '24px' }}>
        <Link to="/game">
          <Button className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
            NEXT
          </Button>
        </Link>
      </Box>
      <Box>
        <Stepper length={5} step={5} />
      </Box>
    </LoginLayout>
  )
}

export { LoginSuccess }
