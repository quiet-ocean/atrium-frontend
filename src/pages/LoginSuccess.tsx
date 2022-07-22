import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginLayout, Stepper } from '../components'
import { useAppSelector } from '../hooks'
import phaserGame from '../PhaserGame'
import type Bootstrap from '../scenes/Bootstrap'

const LoginSuccess = () => {
  const user = useAppSelector((state) => state.auth.user)
  const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)

  const navigate = useNavigate()

  const handleNextBtn = () => {
    if (!roomJoined && lobbyJoined) {
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .joinOrCreatePublic()
        .then(() => {
          bootstrap.launchGame()
          navigate('/game')
        })
        .catch((error) => console.error(error))
    }
  }

  return (
    <LoginLayout>
      <Box sx={{ mb: '50px', textAlign: 'center' }}>
        <img src={(user as any).avatar} alt="" style={{ width: 230 }} />
      </Box>
      <Box sx={{ mb: '50px' }}>
        <Typography className="atrium_title" sx={{ mb: '50px' }} component="h1">
          Welcome Back!
        </Typography>
        <Typography className="atrium_info">Welcome Back to Atrium,</Typography>
        <Typography className="atrium_info">
          {(user as any).username}
        </Typography>
      </Box>
      <Box sx={{ mb: '24px' }}>
        <Button
          className="atrium_btn atrium_btn_primary"
          onClick={handleNextBtn}
        >
          NEXT
        </Button>
      </Box>
      <Box>
        <Stepper length={5} step={5} />
      </Box>
    </LoginLayout>
  )
}

export { LoginSuccess }
