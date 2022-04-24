import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Grid, CssBaseline, Box, Container } from '@mui/material';
// import { CWindow } from '../../types/Window';
import { useAppSelector } from '../hooks';
import { WalletType } from '../stores/AppStore';
// declare let window: CWindow;
const Login = () => {
  const navigate = useNavigate();
  const walletType: WalletType = useAppSelector(
    (state: { app: { wallet: any } }) => state.app.wallet,
  );

  React.useEffect(() => {
    console.log('wallet type is ', walletType);
    if (walletType !== WalletType.none) {
      navigate('/login/create-room');
      return;
    }
    navigate('/login');
  }, [walletType]);

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
  );
};

export { Login };
