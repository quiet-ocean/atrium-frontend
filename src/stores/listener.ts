import phaserGame from '../PhaserGame'
import type Bootstrap from '../scenes/Bootstrap'

import { selectBackGroundMode } from './UserStore'

import type { RootState } from './index'

export const toggleBackGroundListener = (action, listenerApi) => {
  const newMode = selectBackGroundMode(listenerApi.getState() as RootState)
  const bootstrap = phaserGame.bootstrap as Bootstrap
  bootstrap.changeBackgroundMode(newMode)
}
