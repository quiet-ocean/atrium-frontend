import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Stepper } from '../../components';
import { loginNear, logoutNear } from '../../utils/nearAPI';
import { loginSender } from '../../utils/senderAPI';
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { Wallet } from '../../types/Wallet';
// import { Buffer } from 'buffer';
// globalThis.Buffer = Buffer;

const ChooseWallet = () => {
  const navigate = useNavigate();
  const [walletType, setWalletType] = useState(Wallet.None);

  // useEffect(() => {
  //   if (walletType !== Wallet.None) {
  //     navigate('/login/choose-name');
  //   }
  // }, []);

  const login = () => {
    console.log('login', walletType);
    if (walletType === Wallet.Sender) {
      logoutNear();
      loginSender();
    } else if (walletType === Wallet.Near) {
      loginNear(window.location.origin + '/login/choose-name', 'https://localhost:1234');
    } else {

    }
  };

  return (
    <>
      <h1>Connect Wallet</h1>
      <p>Connect your wallet to get started on your Web3 Journey</p>
      <Button
        onClick={() => setWalletType(Wallet.Near)}
        className="atrium_btn"
        sx={{ mt: '12px' }}
      >
        NEAR Wallet
      </Button>
      <Button onClick={() => setWalletType(Wallet.Sender)} className="atrium_btn">
        Sender Wallet
      </Button>
      <Button onClick={login} className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
        NEXT
      </Button>
      <Stepper length={5} step={0} />
    </>
  );
};

export { ChooseWallet };
