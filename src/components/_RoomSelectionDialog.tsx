import { useState, useEffect } from 'react';
import { loginNear} from '../utils';
import { IRoomData } from '../types/Rooms';

import phaserGame from '../PhaserGame'
import Bootstrap from '../scenes/Bootstrap'
import Game from '../scenes/Game'

import Adam from '../assets/Adam_login.png'
import Ash from '../assets/Ash_login.png'
import Lucy from '../assets/Lucy_login.png'
import Nancy from '../assets/Nancy_login.png'

import { setLoggedIn } from '../stores/UserStore'
import { useAppSelector, useAppDispatch } from '../hooks'

enum Wallet {
  Near, Sender, None
};

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

const WalletConnectionForm = () => {
  const [walletType, setWalletType] = useState(Wallet.None);  
  const login = () => {
    if (walletType === Wallet.Near) {
      loginNear();
    } else if (walletType === Wallet.Sender) {

    } else {

    }
  }
  return (
    <>
      <h1>Wallet Connection</h1>
      <button onClick={() => setWalletType(Wallet.Near)}>near</button>
      <button onClick={() => setWalletType(Wallet.Sender)}>sender</button>
      <button onClick={() => login()}>next</button>
    </>
  );
};

const CreateRoomForm = () => {
  const dispatch = useAppDispatch();
  const game = phaserGame.scene.keys.game as Game
  const [values, setValues] = useState<IRoomData>({
    name: '',
    description: 'game room',
    password: null,
    autoDispose: true,
  });
  const create = () => {
    if (values.name) {
      console.log(values);
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .createCustom(values)
        .then(() => {
          bootstrap.launchGame()
          // game.registerKeys()
          // game.myPlayer.setPlayerName((window as any).accountId)
          // game.myPlayer.setPlayerTexture(avatars[0].name)
          // game.network.readyToConnect()
          // dispatch(setLoggedIn(true))
        })
        .catch((error) => console.error(error))
    }
  };
  const handleChange = (prop: keyof IRoomData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value });
  }
  return (
    <>
      <h1>create room</h1>
      <input onChange={handleChange('name')}/>
      <button onClick={create}>create room</button>
    </>
  );
};

const RoomSelectionDialog = () => {
  const [connected, setConnected] = useState(false);
  // const [showRooms, setShowRooms] = useState(false);
  useEffect(() => {
    if((window as any)?.accountId) {
      setConnected(true);
    }
  }, []);
  return (
    <>
      { connected ? <CreateRoomForm /> : <WalletConnectionForm /> }
    </>
  )
};
export { WalletConnectionForm };
export default RoomSelectionDialog;