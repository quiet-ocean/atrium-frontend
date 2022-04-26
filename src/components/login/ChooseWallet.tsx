import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Stepper } from '../../components';
import { loginNEAR } from '../../utils/near';
import { loginSender } from '../../utils/sender';
import { WalletType, showToast } from '../../stores/AppStore';
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

const ChooseWallet = () => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(WalletType.none);
  const walletType = useAppSelector((state) => state.app.wallet);

  useEffect(() => {
    if (walletType !== WalletType.none) {
      navigate('/login/create-room');
    }
  }, []);

  const selectWalletType = (type: WalletType) => {
    // dispatch(setWallet({ walletType: type }));
    setWallet(type);
  };
  const handleSuccess = () => {
    navigate('/login/create-room');
  };
  const login = () => {
    console.log('login', walletType);
    if (wallet === WalletType.sender) {
      loginSender(handleSuccess);
    } else if (wallet === WalletType.near) {
      loginNEAR(window.location.origin + '/login/choose-name', 'https://localhost:1234');
    } else {
      showToast({ message: 'please select wallet' });
    }
  };

  return (
    <>
      <h1>Connect Wallet</h1>
      <p>Connect your wallet to get started on your Web3 Journey</p>
      <Button
        onClick={() => selectWalletType(WalletType.near)}
        className={`atrium_btn ${wallet === WalletType.near ? 'active' : ''}`}
        sx={{ mt: '12px' }}
      >
        NEAR Wallet
      </Button>
      <Button
        className={`atrium_btn ${wallet === WalletType.sender ? 'active' : ''}`}
        onClick={() => selectWalletType(WalletType.sender)}
      >
        Sender Wallet
      </Button>
      <Button className="atrium_btn atrium_btn_primary" onClick={login} sx={{ mt: '56px' }}>
        NEXT
      </Button>
      <Stepper length={5} step={0} />
    </>
  );
};

export { ChooseWallet };
