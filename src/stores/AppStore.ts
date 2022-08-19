import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const AppSlice = createSlice({
  initialState: {
    searchUserCriteria: '',
  },
  name: 'app',
  reducers: {
    setSearchUserCriteria: (state, action: PayloadAction<string>) => {
      state.searchUserCriteria = action.payload
    },
  },
})

export const { setSearchUserCriteria } = AppSlice.actions

export default AppSlice.reducer
