import { Container } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { PrivateRoute } from './components'
import { useAppDispatch } from './hooks'
import {
  ConnectWallet,
  SelectIdentity,
  SelectSkin,
  SetName,
  GameUI,
  Welcome,
  Signin,
  LoadScene,
  ClubBoardUI,
  LoginSuccess
} from './pages'
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
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/select-identity" element={<SelectIdentity />} />
          <Route path="/select-skin" element={<SelectSkin />} />
          <Route path="/set-name" element={<SetName />} />
          <Route path="/load-scene" element={<LoadScene />} />
          <Route path="/game" element={<GameUI />} />
          <Route path="/club-board" element={<ClubBoardUI />} />
          <Route path="/success" element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
