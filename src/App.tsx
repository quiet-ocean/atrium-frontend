import { Container } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useAppDispatch } from './hooks'
import {
  Setting,
  LoginSuccess,
  ConnectSocials,
  ConnectWallet,
  SetAvatar,
  SetName,
  ScanDAO,
  GameUI,
} from './pages'
import ProfileModal from './pages/ProfileModal'
import Account from './pages/ProfileModal/Account'
import Dashboard from './pages/ProfileModal/Dashboard'
import ProfileEdit from './pages/ProfileModal/ProfileEdit'
import { setWalletConnected } from './stores/UserStore'
import type { CWindow } from './types/Window'

declare let window: CWindow

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const init = async () => {
      if (window.walletConnection || window.near.getAccountId()) {
        if (await window.walletConnection.isSignedIn()) {
          console.log('wallet logged in by near wallet')
          dispatch(setWalletConnected(true))
        } else {
          // setConnected(false);
        }
      } else if (window.near) {
        console.log(
          'already logged in by sender wallet',
          window.near.getAccountId()
        )
      }
    }
    init()
  }, [])

  return (
    <Container maxWidth="xl" sx={{ height: '100%', px: '0px' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route path="/connect-socials" element={<ConnectSocials />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/set-avatar" element={<SetAvatar />} />
          <Route path="/set-name" element={<SetName />} />
          <Route path="/dao" element={<ScanDAO />} />
          <Route path="/game" element={<GameUI />} />
          <Route path="/success" element={<LoginSuccess />} />
          <Route
            path="/profile-modal-development-sandbox"
            element={<ProfileModal />}
          >
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="edit" element={<ProfileEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
