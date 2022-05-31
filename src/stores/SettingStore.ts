import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { sanitizeId } from '../util'

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    settingDialogOpen: false,
  },
  reducers: {
    setSettingDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.settingDialogOpen = action.payload;
    }
  },
})

export const {
  setSettingDialogOpen,
} = settingSlice.actions

export default settingSlice.reducer
