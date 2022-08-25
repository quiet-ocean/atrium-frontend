import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IUser } from '../types/model'

export type TAlert = 'error' | 'warning' | 'success' | 'info'

export type TSnack = {
  open: boolean
  type: TAlert
  content: string
}

export const AppSlice = createSlice({
  initialState: {
    currentUserId: '',
    profile: {} as IUser,
    searchUserCriteria: '',
    snack: { content: '', open: false, type: 'info' } as TSnack,
  },
  name: 'app',
  reducers: {
    openSnack: (state, action: PayloadAction<TSnack>) => {
      state.snack = {
        content: action.payload.content,
        open: true,
        type: action.payload.type,
      }
    },
    setCurrentUserId: (state, action: PayloadAction<string>) => {
      state.currentUserId = action.payload
    },
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload
    },
    setSearchUserCriteria: (state, action: PayloadAction<string>) => {
      state.searchUserCriteria = action.payload
    },
    setSnackbarOpen: (state, action: PayloadAction<boolean>) => {
      state.snack = { ...state.snack, open: action.payload }
    },
  },
})

export const { setSearchUserCriteria, setProfile, setSnackbarOpen, openSnack } =
  AppSlice.actions

export default AppSlice.reducer
