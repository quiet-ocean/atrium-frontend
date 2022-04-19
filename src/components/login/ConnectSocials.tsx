import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Stepper } from '../../components';

const ConnectSocials = () => {
  return (
    <>
      <h1>Connect Socials</h1>
      <p>Connect your socials to access special integrations within the game.</p>
      <Button className="atrium_btn">Connect Twitter</Button>
      <Button className="atrium_btn">Connect Discord</Button>
      <Button className="atrium_btn atrium_btn_primary" sx={{ mt: "56px"}}>
        <Link to="/login/dao">NEXT</Link>
      </Button>
      <Button className="atrium_btn">
        <Link to="/login/dao">SKIP FOR NOW</Link>
      </Button>
      <Stepper length={5} step={3} />
    </>
  );
};

export { ConnectSocials };
