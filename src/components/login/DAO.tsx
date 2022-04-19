import { Button } from '@mui/material';
import { Stepper } from '../../components';

const DAO = () => {
  return (
    <>
      <h1>Suggested DAOs</h1>
      <p>Connect and choose which DAOs to be a part of ingame.</p>
      <Button className="atrium_btn">Scan for DAOs</Button>
      <Button className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
        NEXT
      </Button>
      <Button className="atrium_btn">SKIP FOR NOW</Button>
      <Stepper length={5} step={4} />
    </>
  );
};

export { DAO };
