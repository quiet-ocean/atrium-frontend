import { useEffect } from 'react';
import Login from './pages/login/Login';
import { Container, Snackbar } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChooseWallet, ChooseName, ConnectSocials, DAO, SetAvatar } from './pages/login';
import { Setting } from './pages/setting';
import { initNearContract } from './utils/near';
import { CWindow } from './types/Window';
import { useAppDispatch, useAppSelector } from './hooks';
import { WalletType } from './stores/AppStore';
import { setWallet, setSnackOpen } from './stores/AppStore';
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

declare let window: CWindow;

const Home = () => {
  const message: string = useAppSelector((state: { app: { message: any } }) => state.app.message);
  const open: boolean = useAppSelector((state: { app: { snackOpen: any } }) => state.app.snackOpen);
  const dispatch = useAppDispatch();
  // console.log(process.env.REACT_APP_CONTRACT_ID);

  useEffect(() => {
    // console.log('wallet connected to ', wallet);
    const init = async () => {
      await initNearContract();
      if (window.walletConnection) {
        if (await window.walletConnection.isSignedIn()) {
          console.log('wallet logged in by near wallet');
          dispatch(setWallet({ walletType: WalletType.near }));
        } else {
          // setConnected(false);
        }
      } else if (window.near) {
        console.log(window.near.getAccountId());
      }
    };
    init();
  }, []);
  const handleClose = () => {
    dispatch(setSnackOpen({ open: false }));
  };
  return (
    <Container maxWidth="xl" sx={{ px: '0px', height: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />}>
            <Route path="" element={<ChooseWallet />} />
            <Route path="choose-name" element={<ChooseName />} />
            <Route path="set-avatar" element={<SetAvatar />} />
            <Route path="connect-socials" element={<ConnectSocials />} />
            <Route path="dao" element={<DAO />} />
          </Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        message={message}
        key={`top-right`}
      />
    </Container>
  );
};

export default Home;
