import { Button, Box, Typography, IconButton } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { To } from 'react-router-dom'

import { LoginLayout } from '../../components'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { login, setUser, requestUser } from '../../stores/AuthStore'
import { setWalletConnected } from '../../stores/UserStore'
import { Wallet } from '../../types/Wallet'
import { getAccount, loginNear, logoutNear } from '../../utils/nearAPI'
import { loginSender } from '../../utils/senderAPI'
import { LoginSubLayout } from './LoginSubLayout'

import { palette } from '../../MuiTheme'

import metamask from '../../assets/icons/metamask-logo.png'
import phantom from '../../assets/icons/phantom-logo.png'
import near from '../../assets/icons/near-logo.png'

export const WalletCard = ({ wallet, commingSoon, active }: { wallet: string, commingSoon?: boolean, active?: boolean }) => {
  
  return (
    <Box p='50px' height={'370px'} sx={{ background: active? palette.text.primary : palette.background.paper }}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box position="relative">
          <img src={wallet} alt="" color={palette.text.primary} />
          <Box position="absolute" display={`${commingSoon ? 'flex' : 'none !important'}`} top="-40px">
            <Typography variant="h4" color={palette.text.disabled}>comming soon</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
const ConnectWallet = () => {
  const navigate = useNavigate()
  const [walletType, setWalletType] = useState(Wallet.None)
  const dispatch = useAppDispatch()
  const walletConnected = useAppSelector((state) => state.user.walletConnected)

  useEffect(() => {
    console.log('wallet connected: ', walletConnected)
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
    // console.log(location)
    if (walletType === Wallet.Sender) {
      await logoutNear()
      const loggedIn = await loginSender()
      if (loggedIn) {
        dispatch(setWalletConnected(true))
        navigate('/set-name')
      }
    } else if (walletType === Wallet.Near) {
      loginNear(`${window.location.href}set-name`)
    }
  }

  return (
    <LoginLayout>
      <LoginSubLayout stepper>
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Select a Wallet Source</Typography>
          </Box>
          <Box gap="24px" mt="24px">
            <WalletCard wallet={phantom} commingSoon />
            <Box>
              <WalletCard wallet={near} />
            </Box>
            <WalletCard wallet={metamask} commingSoon />
          </Box>
          {/* <Button
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
          </Button> */}
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}

export { ConnectWallet }
