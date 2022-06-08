import { Grid, CssBaseline, Box, Container } from '@mui/material'
import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// import { CWindow } from '../../types/Window';
import { useAppSelector } from '../hooks'
// declare let window: CWindow;
import { Wallet } from '../types/Wallet'

const Login = () => {
  const [walletType, setWalletType] = React.useState(Wallet.None)
  const connected = useAppSelector((state) => state.user.walletConnected)
  const navigate = useNavigate()

  React.useEffect(() => {
    console.log('wallet type is ', walletType)
    if (connected) {
      navigate('/login/choose-name')
      return
    }
    navigate('/login')
  }, [connected])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="login" sx={{ px: '0px' }}>
        <Box sx={{ bgcolor: '', height: '100%' }}>
          <Grid container>
            <Grid item md={7} />
            <Grid item md={4}>
              <div className="login_panel">
                <Outlet />
                <Box sx={{ mt: '36px' }}>
                  <p className="atrium_text_secondary">
                    Already have an account?
                    <span className="atrium_text_light"> Log in now</span>
                  </p>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export { Login }
