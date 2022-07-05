import React from 'react'
import styled from 'styled-components'

// import LoginDialog from './components/LoginDialog'
// import VideoConnectionDialog from '../components/VideoConnectionDialog'

import Adam from '../assets/Adam_login.png'
import Ash from '../assets/Ash_login.png'
import Lucy from '../assets/Lucy_login.png'
import Nancy from '../assets/Nancy_login.png'
import RoomSelectionDialog from '../components/_RoomSelectionDialog'
import Chat from '../components/Chat'
import ComputerDialog from '../components/ComputerDialog'
import HelperButtonGroup from '../components/HelperButtonGroup'
import SettingDialog from '../components/SettingDialog'
import WhiteboardDialog from '../components/WhiteboardDialog'
import { useAppDispatch, useAppSelector } from '../hooks'
import phaserGame from '../PhaserGame'
import type Game from '../scenes/Game'
import { setLoggedIn } from '../stores/UserStore'

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const avatars = [
  { img: Adam, name: 'adam' },
  { img: Ash, name: 'ash' },
  { img: Lucy, name: 'lucy' },
  { img: Nancy, name: 'nancy' },
]

// shuffle the avatars array
for (let i = avatars.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  ;[avatars[i], avatars[j]] = [avatars[j], avatars[i]]
}

function GameUI() {
  const dispatch = useAppDispatch()
  const game = phaserGame.scene.keys.game as Game
  console.log(game)
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const playerName = useAppSelector((state) => state.user.playerName)
  const computerDialogOpen = useAppSelector(
    (state) => state.computer.computerDialogOpen
  )
  const whiteboardDialogOpen = useAppSelector(
    (state) => state.whiteboard.whiteboardDialogOpen
  )
  // const videoConnected = useAppSelector((state) => state.user.videoConnected)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)
  const settingDialogOpen = useAppSelector(
    (state) => state.setting.settingDialogOpen
  )
  const isMyPlayerReady = useAppSelector((state) => state.user.isMyPlayerReady)

  React.useEffect(() => {
    if (isMyPlayerReady && game) {
      game.registerKeys()
      if (game.myPlayer) {
        console.log('set player name to ', playerName)
        game.myPlayer.setPlayerName(
          playerName ||
            (window as any).accountId ||
            (window as any).near?.accountId
        )
        game.myPlayer.setPlayerTexture(avatars[0].name)
        game.network.readyToConnect()
        dispatch(setLoggedIn(true))
      }
    }
  }, [isMyPlayerReady])

  let ui: JSX.Element
  if (loggedIn) {
    if (computerDialogOpen) {
      /* Render ComputerDialog if user is using a computer. */
      ui = <ComputerDialog />
    } else if (whiteboardDialogOpen) {
      /* Render WhiteboardDialog if user is using a whiteboard. */
      ui = <WhiteboardDialog />
    } else if (settingDialogOpen) {
      ui = <SettingDialog />
    } else {
      ui = (
        /* Render Chat or VideoConnectionDialog if no dialogs are opened. */
        <>
          <Chat />
          {/* Render VideoConnectionDialog if user is not connected to a webcam. */}
          {/* {!videoConnected && <VideoConnectionDialog />} */}
        </>
      )
    }
  } else if (roomJoined) {
    /* Render LoginDialog if not logged in but selected a room. */
    // ui = <LoginDialog />
    // if (game) {
    //   game.registerKeys()
    //   if (game.myPlayer) {
    //     console.log('set player name to ', playerName)
    //     game.myPlayer.setPlayerName(
    //       playerName ||
    //         (window as any).accountId ||
    //         (window as any).near?.accountId
    //     )
    //     game.myPlayer.setPlayerTexture(avatars[0].name)
    //     game.network.readyToConnect()
    //     dispatch(setLoggedIn(true))
    //   }
    // }
    ui = <></>
    // console.log('room joined');
  } else {
    /* Render RoomSelectionDialog if yet selected a room. */
    ui = <RoomSelectionDialog />
    // ui = <div></div>
  }

  return (
    <Backdrop>
      {ui}
      {/* Render HelperButtonGroup if no dialogs are opened. */}
      {!computerDialogOpen && !whiteboardDialogOpen && <HelperButtonGroup />}
    </Backdrop>
  )
}

export { GameUI }
