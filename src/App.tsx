import { useEffect } from 'react';
import { Container, Snackbar } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChooseWallet, ChooseName, ConnectSocials, DAO, SetAvatar } from './components/login';
import { Setting, Login } from './pages';
// import { initNearContract } from './utils/near';
import { CWindow } from './types/Window';
import { useAppDispatch, useAppSelector } from './hooks';
import { setWalletConnected } from './stores/UserStore';

// import { Buffer } from 'buffer';
// globalThis.Buffer = Buffer;

declare let window: CWindow;

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      if (window.walletConnection) {
        if (await window.walletConnection.isSignedIn()) {
          console.log('wallet logged in by near wallet');
          dispatch(setWalletConnected(true));
        } else {
          // setConnected(false);
        }
      } else if (window.near) {
        console.log('already logged in by sender wallet', window.near.getAccountId());
      }
    };
    init();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ px: '0px', height: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />}>
            <Route path="" element={<ChooseWallet />} />
            <Route path="choose-name" element={<ChooseName />} />
            <Route path="set-avatar" element={<SetAvatar />} />
            <Route path="connect-socials" element={<ConnectSocials />} />
            <Route path="dao" element={<DAO />} />
          </Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;

// import React from 'react'
// import styled from 'styled-components'

// import { useAppDispatch, useAppSelector } from './hooks'
// import { setLoggedIn } from './stores/UserStore'

// import RoomSelectionDialog from './components/_RoomSelectionDialog'
// // import LoginDialog from './components/LoginDialog'
// import ComputerDialog from './components/ComputerDialog'
// import WhiteboardDialog from './components/WhiteboardDialog'
// import VideoConnectionDialog from './components/VideoConnectionDialog'
// import SettingDialog from './components/SettingDialog';
// import Chat from './components/Chat'
// import HelperButtonGroup from './components/HelperButtonGroup'

// import Game from './scenes/Game'
// import phaserGame from './PhaserGame'

// import Adam from './assets/Adam_login.png'
// import Ash from './assets/Ash_login.png'
// import Lucy from './assets/Lucy_login.png'
// import Nancy from './assets/Nancy_login.png'

// const Backdrop = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
// `

// const avatars = [
//   { name: 'adam', img: Adam },
//   { name: 'ash', img: Ash },
//   { name: 'lucy', img: Lucy },
//   { name: 'nancy', img: Nancy },
// ]

// // shuffle the avatars array
// for (let i = avatars.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1))
//   ;[avatars[i], avatars[j]] = [avatars[j], avatars[i]]
// }

// function App() {
//   const dispatch = useAppDispatch();
//   const game = phaserGame.scene.keys.game as Game
//   const loggedIn = useAppSelector((state) => state.user.loggedIn);
//   const playerName = useAppSelector((state) => state.user.playerName);
//   const computerDialogOpen = useAppSelector((state) => state.computer.computerDialogOpen)
//   const whiteboardDialogOpen = useAppSelector((state) => state.whiteboard.whiteboardDialogOpen)
//   const videoConnected = useAppSelector((state) => state.user.videoConnected)
//   const roomJoined = useAppSelector((state) => state.room.roomJoined)
//   const settingDialogOpen = useAppSelector((state) => state.setting.settingDialogOpen);

//   let ui: JSX.Element
//   if (loggedIn) {
//     if (computerDialogOpen) {
//       /* Render ComputerDialog if user is using a computer. */
//       ui = <ComputerDialog />
//     } else if (whiteboardDialogOpen) {
//       /* Render WhiteboardDialog if user is using a whiteboard. */
//       ui = <WhiteboardDialog />
//     } else if (settingDialogOpen) {
//       ui = <SettingDialog />
//     } else {
//       ui = (
//         /* Render Chat or VideoConnectionDialog if no dialogs are opened. */
//         <>
//           <Chat />
//           {/* Render VideoConnectionDialog if user is not connected to a webcam. */}
//           {/* {!videoConnected && <VideoConnectionDialog />} */}
//         </>
//       )
//     }
//   } else if (roomJoined) {
//     /* Render LoginDialog if not logged in but selected a room. */
//     // ui = <LoginDialog />
//     ui = <></>
//     // console.log('room joined');
//     if(game) {
//       game.registerKeys()
//       if(game.myPlayer) {
//         game.myPlayer.setPlayerName(playerName || (window as any).accountId || (window as any).near?.accountId)
//         game.myPlayer.setPlayerTexture(avatars[0].name)
//         game.network.readyToConnect()
//         dispatch(setLoggedIn(true))
//       }
//     }
//   } else {
//     /* Render RoomSelectionDialog if yet selected a room. */
//     ui = <RoomSelectionDialog />
//     // ui = <div></div>
//   }

//   return (
//     <Backdrop>
//       {ui}
//       {/* Render HelperButtonGroup if no dialogs are opened. */}
//       {!computerDialogOpen && !whiteboardDialogOpen && <HelperButtonGroup />}
//     </Backdrop>
//   )
// }

// export default App
