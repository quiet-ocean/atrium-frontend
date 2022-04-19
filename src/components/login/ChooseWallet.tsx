import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Stepper } from '../../components';
import { loginNEAR } from '../../utils/near';
import { loginSender } from '../../utils/sender';
import { WalletType, setWallet, showToast } from '../../stores/AppStore';
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { useAppSelector } from '../../hooks';

const ChooseWallet = () => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(WalletType.none);
  const [loggedIn, setLoggedIn] = useState(false);
  const walletType = useAppSelector((state) => state.app.wallet);
  // const dispatch = useAppDispatch();
  // const location = useLocation();
  // console.log('current location is ', location);
  // console.log(WalletType);
  useEffect(() => {
    setLoggedIn(true);
    console.log(loggedIn);
    // console.log('wallet type is ', walletType);
    if (walletType !== WalletType.none) {
      navigate('/login/choose-name');
    }
  }, []);

  const selectWalletType = (type: WalletType) => {
    // dispatch(setWallet({ walletType: type }));
    setWallet(type);
  };

  const login = () => {
    console.log('login', walletType);
    if (wallet === WalletType.sender) {
      loginSender();
    } else if (wallet === WalletType.near) {
      loginNEAR();
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
        className="atrium_btn"
        sx={{ mt: '12px' }}
      >
        NEAR Wallet
      </Button>
      <Button onClick={() => selectWalletType(WalletType.sender)} className="atrium_btn">
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
