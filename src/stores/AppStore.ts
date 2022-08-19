import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IUser } from '../types/User'

export const AppSlice = createSlice({
  initialState: {
    profile: {} as IUser,
    searchUserCriteria: '',
  },
  name: 'app',
  reducers: {
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload
    },
    setSearchUserCriteria: (state, action: PayloadAction<string>) => {
      state.searchUserCriteria = action.payload
    },
  },
})

export const { setSearchUserCriteria, setProfile } = AppSlice.actions

export default AppSlice.reducer
