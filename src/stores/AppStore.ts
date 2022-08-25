import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IUser } from '../types/model'

export const AppSlice = createSlice({
  initialState: {
    currentUserId: '',
    profile: {} as IUser,
    searchUserCriteria: '',
  },
  name: 'app',
  reducers: {
    setCurrentUserId: (state, action: PayloadAction<string>) => {
      state.currentUserId = action.payload
    },
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload
    },
    setSearchUserCriteria: (state, action: PayloadAction<string>) => {
      state.searchUserCriteria = action.payload
    },
  },
})

export const { setCurrentUserId, setSearchUserCriteria, setProfile } =
  AppSlice.actions

export default AppSlice.reducer
