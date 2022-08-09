import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Adam from '../../assets/Adam_login.png'
// import Ash from '../../assets/Ash_login.png'
// import Lucy from '../../assets/Lucy_login.png'
// import Nancy from '../../assets/Nancy_login.png'
import { ATextField, LoginLayout } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import phaserGame from '../../PhaserGame'
import type Game from '../../scenes/Game'
import { setUser } from '../../stores/AuthStore'
import { setPlayerName } from '../../stores/UserStore'

import { LoginSubLayout } from './LoginSubLayout'

// const avatars = [
//   { img: Adam, name: 'adam' },
//   { img: Ash, name: 'ash' },
//   { img: Lucy, name: 'lucy' },
//   { img: Nancy, name: 'nancy' },
// ]

const SetName = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    handleNext()
  }, [])
  // const playerName = useAppSelector((state) => state.user.playerName);
  const dispatch = useAppDispatch()
  // const [name, setName] = React.useState('')
  // const [confirmName, setConfirmName] = React.useState<string>('')
  // const [nameError, setNameError] = React.useState<string>('')
  // const [confirmError, setConfirmError] = React.useState<string>('')

  const game = phaserGame.game as Game
  const playerName = useAppSelector((state) => state.user.playerName)

  const handleNext = () => {
    // if (name !== '') {
    //   if (name === confirmName) {
    const name = 'ASAC Rockey'
    dispatch(setUser({ username: name }))
    dispatch(setPlayerName(name))
    if (game) {
      game.registerKeys()
      if (game.myPlayer) {
        console.log('set player name to ', playerName)
        game.myPlayer.setPlayerName(
          playerName ||
            (window as any).accountId ||
            (window as any).near?.accountId
        )
        game.myPlayer.setPlayerTexture('avatars[0].name')
        game.network.readyToConnect()
        // dispatch(setLoggedIn(true))
      }
    }
    // navigate('/set-avatar')
    //   } else {
    //     setConfirmError('The name must be match.')
    //   }
    // } else {
    //   // dispatch(showToast({message: "display name is not match."}));
    //   setNameError('This name has been taken.')
    // }
  }
  // const handleChange = (un: string) => {
  //   // dispatch(setUsername({ username: un }));
  //   setName(un)
  //   setNameError('')
  //   setConfirmError('')
  // }
  return (
    <LoginLayout>
      <LoginSubLayout
        stepper
        enable
        goForward={() => navigate('/select-identity')}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Set a Nickname</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="body2">
              This will be your public name on The Grid.
            </Typography>
          </Box>
          <Box mt="12px">
            <Typography variant="body2">
              Don’t stress fam. You can change this later if you want.{' '}
            </Typography>
          </Box>
          <Box mt="84px">
            <ATextField fullWidth />
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}

export { SetName }
