import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { Stepper, LoginLayout } from '../components'
// import phaserGame from '../PhaserGame'
// import Bootstrap from '../scenes/Bootstrap'
const ScanDAO = () => {
  // const handleConnect = () => {
  //   let root = document.getElementById('root');
  //   if (root) root.style.display = 'none';
  //   const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
  //   bootstrap.network
  //     .joinOrCreatePublic()
  //     .then(() => bootstrap.launchGame())
  //     .catch((error) => console.error(error))
  // }
  return (
    <LoginLayout>
      <h1>Suggested DAOs</h1>
      <p>Connect and choose which DAOs to be a part of ingame.</p>
      <Button className="atrium_btn">Scan for DAOs</Button>
      <Button className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
        <Link to="/game">NEXT</Link>
      </Button>
      <Button className="atrium_btn">SKIP FOR NOW</Button>
      <Stepper length={5} step={4} />
    </LoginLayout>
  )
}

export { ScanDAO }
