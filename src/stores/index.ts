import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'

import phaserGame from '../PhaserGame'
import type Bootstrap from '../scenes/Bootstrap'

import chatReducer from './ChatStore'
import computerReducer from './ComputerStore'
import roomReducer from './RoomStore'
import settingReducer from './SettingStore'
import userReducer, {
  toggleBackgroundMode,
  selectBackGroundMode,
} from './UserStore'
import whiteboardReducer from './WhiteboardStore'

const listenerMiddleware = createListenerMiddleware()
enableMapSet()

listenerMiddleware.startListening({
  actionCreator: toggleBackgroundMode,
  effect: (action, listenerApi) => {
    const newMode = selectBackGroundMode(listenerApi.getState() as RootState)
    const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
    bootstrap.changeBackgroundMode(newMode)
  },
})

const store = configureStore({
  // Temporary disable serialize check for redux as we store MediaStream in ComputerStore.
  // https://stackoverflow.com/a/63244831
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    chat: chatReducer,
    computer: computerReducer,
    room: roomReducer,
    setting: settingReducer,
    user: userReducer,
    whiteboard: whiteboardReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
