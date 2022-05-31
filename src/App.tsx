import { useEffect } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Setting } from './pages';
import { CWindow } from './types/Window';
import { useAppDispatch } from './hooks';
import { setWalletConnected } from './stores/UserStore';
import { LoginSuccess, ConnectSocials, ConnectWallet, SetAvatar, SetName, ScanDAO, GameUI } from './pages';

declare let window: CWindow;

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      if (window.walletConnection || window.near.getAccountId()) {
        if (await window.walletConnection.isSignedIn()) {
          console.log('wallet logged in by near wallet');
          dispatch(setWalletConnected(true));
        } else {
          // setConnected(false);
        }
      } else if (window.near) {
        console.log('already logged in by sender wallet', window.near.getAccountId());
      }
    };
    init();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ px: '0px', height: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/connect-socials" element={<ConnectSocials />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/set-avatar" element={<SetAvatar  />} />
          <Route path="/set-name" element={<SetName />} />
          <Route path="/dao" element={<ScanDAO />} />
          <Route path="/game" element={<GameUI />} />
          <Route path="/success" element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;