import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import phaserGame from '../PhaserGame'
import type Game from '../scenes/Game'
import type { IChatMessage } from '../types/IOfficeState'

export enum MessageType {
  PLAYER_JOINED,
  PLAYER_LEFT,
  REGULAR_MESSAGE,
}

export const chatSlice = createSlice({
  initialState: {
    chatMessages: new Array<{
      messageType: MessageType
      chatMessage: IChatMessage
    }>(),
    focused: false,
    showChat: true,
  },
  name: 'chat',
  reducers: {
    pushChatMessage: (state, action: PayloadAction<IChatMessage>) => {
      state.chatMessages.push({
        chatMessage: action.payload,
        messageType: MessageType.REGULAR_MESSAGE,
      })
    },
    pushPlayerJoinedMessage: (state, action: PayloadAction<string>) => {
      state.chatMessages.push({
        chatMessage: {
          author: action.payload,
          content: 'joined the lobby',
          createdAt: new Date().getTime(),
        } as IChatMessage,
        messageType: MessageType.PLAYER_JOINED,
      })
    },
    pushPlayerLeftMessage: (state, action: PayloadAction<string>) => {
      state.chatMessages.push({
        chatMessage: {
          author: action.payload,
          content: 'left the lobby',
          createdAt: new Date().getTime(),
        } as IChatMessage,
        messageType: MessageType.PLAYER_LEFT,
      })
    },
    setFocused: (state, action: PayloadAction<boolean>) => {
      const game = phaserGame.scene.keys.game as Game
      action.payload ? game.disableKeys() : game.enableKeys()
      state.focused = action.payload
    },
    setShowChat: (state, action: PayloadAction<boolean>) => {
      state.showChat = action.payload
    },
  },
})

export const {
  pushChatMessage,
  pushPlayerJoinedMessage,
  pushPlayerLeftMessage,
  setFocused,
  setShowChat,
} = chatSlice.actions

export default chatSlice.reducer
