import { Button } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react'
import type { To } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// import { Link } from 'react-router-dom';
import { Stepper, LoginLayout } from '../components'
import { useAppSelector, useAppDispatch } from '../hooks'
import {
  // setAccessToken,
  login,
  setUser,
  requestUser,
} from '../stores/AuthStore'
import { setWalletConnected } from '../stores/UserStore'
import { Wallet } from '../types/Wallet'
import type { CWindow } from '../types/Window'
import { loginNear, logoutNear } from '../utils/nearAPI'
import { loginSender } from '../utils/senderAPI'
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;
declare let window: CWindow

const ConnectWallet = () => {
  const navigate = useNavigate()
  const [walletType, setWalletType] = useState(Wallet.None)
  const dispatch = useAppDispatch()
  const connected = useAppSelector((state) => state.user.walletConnected)

  useEffect(() => {
    if (connected) {
      console.log('wallet connection is ', connected)
      dispatch(setUser({ accountId: window.accountId }))
      fetchLogin('/success', '/set-name')
    }
  }, [connected])

  const fetchLogin = async (loggedUrl: To, unloggedUrl: To) => {
    try {
      const resultAction = await dispatch(login(window.accountId))
      const originalPromiseResult = unwrapResult(resultAction)
      console.log(resultAction)
      console.log(originalPromiseResult)
      if (originalPromiseResult.accessToken == '') {
        navigate(unloggedUrl)
      } else {
        await dispatch(requestUser())
        navigate(loggedUrl)
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError)
    }
  }

  const handleClickBtn = async () => {
    if (walletType === Wallet.Sender) {
      await logoutNear()
      const loggedIn = await loginSender()
      console.log(loggedIn)
      if (loggedIn) {
        dispatch(setWalletConnected(true))
        navigate('/set-name')
      }
      // navigate('/set-name');
    } else if (walletType === Wallet.Near) {
      loginNear()
    } else {
    }
  }

  return (
    <LoginLayout>
      <>
        <h1>Connect Wallet</h1>
        <p>Connect your wallet to get started on your Web3 Journey</p>
        <Button
          onClick={() => setWalletType(Wallet.Near)}
          className={`atrium_btn ${walletType === Wallet.Near ? 'active' : ''}`}
          sx={{ mt: '12px' }}
        >
          NEAR Wallet
        </Button>
        <Button
          onClick={() => setWalletType(Wallet.Sender)}
          className={`atrium_btn ${
            walletType === Wallet.Sender ? 'active' : ''
          }`}
        >
          Sender Wallet
        </Button>
        <Button
          onClick={handleClickBtn}
          className="atrium_btn atrium_btn_primary"
          sx={{ mt: '56px' }}
        >
          NEXT
        </Button>
        <Stepper length={5} step={0} />
      </>
    </LoginLayout>
  )
}

export { ConnectWallet }
