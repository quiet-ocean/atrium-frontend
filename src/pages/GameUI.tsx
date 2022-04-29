import React from 'react'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../hooks'
import { setLoggedIn } from '../stores/UserStore'

import RoomSelectionDialog from '../components/_RoomSelectionDialog'
// import LoginDialog from './components/LoginDialog'
import ComputerDialog from '../components/ComputerDialog'
import WhiteboardDialog from '../components/WhiteboardDialog'
// import VideoConnectionDialog from '../components/VideoConnectionDialog'
import SettingDialog from '../components/SettingDialog';
import Chat from '../components/Chat'
import HelperButtonGroup from '../components/HelperButtonGroup'

import Game from '../scenes/Game'
import phaserGame from '../PhaserGame'
import Bootstrap from '../scenes/Bootstrap'

import Adam from '../assets/Adam_login.png'
import Ash from '../assets/Ash_login.png'
import Lucy from '../assets/Lucy_login.png'
import Nancy from '../assets/Nancy_login.png'

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const avatars = [
  { name: 'adam', img: Adam },
  { name: 'ash', img: Ash },
  { name: 'lucy', img: Lucy },
  { name: 'nancy', img: Nancy },
]

// shuffle the avatars array
for (let i = avatars.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  ;[avatars[i], avatars[j]] = [avatars[j], avatars[i]]
}

function GameUI() {
  const dispatch = useAppDispatch();
  const game = phaserGame.scene.keys.game as Game
  console.log(game);
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  const playerName = useAppSelector((state) => state.user.playerName);
  const computerDialogOpen = useAppSelector((state) => state.computer.computerDialogOpen)
  const whiteboardDialogOpen = useAppSelector((state) => state.whiteboard.whiteboardDialogOpen)
  // const videoConnected = useAppSelector((state) => state.user.videoConnected)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)
  const settingDialogOpen = useAppSelector((state) => state.setting.settingDialogOpen);

  React.useEffect(() => {
    console.log('init game');
    console.log(game);
    let root = document.getElementById('root');
    if (root) root.style.display = 'none';
    let container = document.getElementById('phaser-container');
    if (container) container.style.display = 'block';
    const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
    if(bootstrap) {
      console.log(bootstrap);
      bootstrap.network
        .joinOrCreatePublic()
        .then(() => bootstrap.launchGame())
        .catch((error) => console.error(error))
    }
  }, [game])

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
    ui = <></>
    // console.log('room joined');
    if(game) {
      game.registerKeys()
      if(game.myPlayer) {
        game.myPlayer.setPlayerName(playerName || (window as any).accountId || (window as any).near?.accountId)
        game.myPlayer.setPlayerTexture(avatars[0].name)
        game.network.readyToConnect()
        dispatch(setLoggedIn(true))
      }
    }
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

export { GameUI };
