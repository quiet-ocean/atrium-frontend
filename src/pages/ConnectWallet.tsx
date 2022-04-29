import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Stepper, LoginLayout } from '../components';
import { loginNear, logoutNear } from '../utils/nearAPI';
import { loginSender } from '../utils/senderAPI';
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setWalletConnected } from '../stores/UserStore';
import { Wallet } from '../types/Wallet';
// import { Buffer } from 'buffer';
// globalThis.Buffer = Buffer;

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [walletType, setWalletType] = useState(Wallet.None);
  const dispatch = useAppDispatch();
  const connected = useAppSelector(state => state.user.walletConnected);

  useEffect(() => {
    if (connected) {
      console.log('wallet connection is ', connected);
      navigate('/set-name');
    }
  }, [connected]);

  const login = async () => {
    console.log('login', walletType);

    
    if (walletType === Wallet.Sender) {
      await logoutNear();
      await loginSender();
      dispatch(setWalletConnected(true));
      // navigate('/set-name');
    } else if (walletType === Wallet.Near) {
      loginNear(window.location.origin + '/set-name', 'https://localhost:1234');
    } else {

    }
  };

  return (
    <LoginLayout>
      <>
        <h1>Connect Wallet</h1>
        <p>Connect your wallet to get started on your Web3 Journey</p>
        <Button
          onClick={() => setWalletType(Wallet.Near)}
          className={`atrium_btn ${ walletType === Wallet.Near ? 'active' : '' }`}
          sx={{ mt: '12px' }}
        >
          NEAR Wallet
        </Button>
        <Button
          onClick={() => setWalletType(Wallet.Sender)}
          className={`atrium_btn ${ walletType === Wallet.Sender ? 'active' : '' }`}
          >
          Sender Wallet
        </Button>
        <Button onClick={login} className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
          NEXT
        </Button>
        <Stepper length={5} step={0} />
      </>
    </LoginLayout>
  );
};

export { ConnectWallet };
