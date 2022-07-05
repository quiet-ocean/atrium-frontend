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
import { ArticleBuilder } from './pages/ProfileModal/ArticleBuilder'
import { FeedbackForm } from './pages/ProfileModal/FeedbackForm'
import Dashboard from './pages/ProfileModal/Dashboard'
import ProfileEdit from './pages/ProfileModal/ProfileEdit'
import { setWalletConnected } from './stores/UserStore'
import type { CWindow } from './types/Window'
import { getAccount } from './utils'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const account = getAccount()
    dispatch(setWalletConnected(account.accountId !== ''))
  }, [])

  return (
    <Container
      maxWidth="xl"
      sx={{ height: '100%', px: '0px' }}
      style={{ position: 'absolute' }}
    >
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
            <Route path="article-builder" element={<ArticleBuilder />} />
            <Route path="feedback" element={<FeedbackForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
