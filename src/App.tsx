import { Container } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './components'
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
  
  Welcome, Signin
} from './pages'
import {
  ClubBoard,
  Dashboard,
  Account,
  ArticleBuilder,
  FeedbackForm,
  EditProfile,
  UserProfile,
  Chat,
  Profile,
  Post,
  SinglePost,
  CommunityHub,
} from './pages/ClubBoard'

import { setWalletConnected } from './stores/UserStore'
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
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/connect-socials"
            element={
              <PrivateRoute>
                <ConnectSocials />
              </PrivateRoute>
            }
          />
          <Route path="/setting" element={<Setting />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/set-avatar" element={<SetAvatar />} />
          <Route path="/set-name" element={<SetName />} />
          <Route path="/dao" element={<ScanDAO />} />
          <Route path="/game" element={<GameUI />} />
          <Route path="/success" element={<LoginSuccess />} />
          <Route
            path="/profile-modal-development-sandbox"
            element={<ClubBoard />}
          >
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="exploration" element={<UserProfile />} />
            <Route path="account" element={<Account />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="article-builder" element={<ArticleBuilder />} />
            <Route path="feedback" element={<FeedbackForm />} />
            <Route path="chat" element={<Chat />} />
            <Route path="post" element={<Post />} />
            <Route path="single-post" element={<SinglePost />} />
            <Route path="community-hub" element={<CommunityHub />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
