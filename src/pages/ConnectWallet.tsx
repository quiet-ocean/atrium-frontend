import { Buffer } from 'buffer'

import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { To } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'

import { Stepper, LoginLayout } from '../components'
import { useAppSelector, useAppDispatch } from '../hooks'
import { setWalletConnected } from '../stores/UserStore'
import { Wallet } from '../types/Wallet'
import { login, setUser, requestUser } from '../stores/AuthStore'
import { getAccount, loginNear, logoutNear } from '../utils/nearAPI'
import { loginSender } from '../utils/senderAPI'

const ConnectWallet = () => {
  const navigate = useNavigate()
  const [walletType, setWalletType] = useState(Wallet.None)
  const dispatch = useAppDispatch()
  const walletConnected = useAppSelector((state) => state.user.walletConnected)

  useEffect(() => {
    if (walletConnected) {
      const account = getAccount()
      console.log(account)
      dispatch(setUser({ accountId: account.accountId }))
      fetchLogin('/success', '/set-name')
    }
  }, [walletConnected])

  const fetchLogin = async (loggedUrl: To, unloggedUrl: To) => {
    try {
      const accountId = getAccount().accountId
      if (accountId !== '') {
        const resultAction = await dispatch(login(accountId))
        const originalPromiseResult = unwrapResult(resultAction)
        if (originalPromiseResult.accessToken == '') {
          navigate(unloggedUrl)
        } else {
          await dispatch(requestUser())
          navigate(loggedUrl)
        }
      }
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError)
    }
  }

  const handleClickBtn = async () => {
    if (walletType === Wallet.Sender) {
      await logoutNear()
      const loggedIn = await loginSender()
      if (loggedIn) {
        dispatch(setWalletConnected(true))
        navigate('/set-name')
      }
    } else if (walletType === Wallet.Near) {
      loginNear()
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
