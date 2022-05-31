import { LoginLayout, Stepper } from '../components';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginSuccess = () => {
  return (
    <LoginLayout>
      <Box sx={{ textAlign: 'center', mb: '50px' }}>
        <img src={`/Ellipse 24.png`} alt="" />
      </Box>
      <Box sx={{ mb: '50px' }}>
        <Typography className="atrium_title" sx={{ mb: '50px' }} component="h1">Welcome Back!</Typography>
        <Typography className="atrium_info">Welcome Back to Atrium,</Typography>
        <Typography className="atrium_info"> swiftyyy.near</Typography>
      </Box>
      <Box sx={{ mb: '24px' }}>
        <Button className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
          <Link to="/game">NEXT</Link>
        </Button>
      </Box>
      <Box>
        <Stepper length={5} step={5} />
      </Box>
    </LoginLayout>
  );
};

export { LoginSuccess};
