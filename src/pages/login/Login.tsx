import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Grid, CssBaseline, Box, Container } from '@mui/material';

const Login = () => {
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   navigate('/login');
  // }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="login" sx={{ px: "0px" }}>
        <Box sx={{ bgcolor: '', height: '100%' }}>
          <Grid container >
            <Grid item md={7} />
            <Grid item md={4}>
              <div className="login_panel">
                <Outlet />
                <Box sx={{ mt: "36px" }}>
                  <p className="atrium_text_secondary">Already have an account?
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

export default Login;
