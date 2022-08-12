import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const UiSlice = createSlice({
  initialState: {
    boardDialogOpen: false,
    currentBoardTab: 0,
  },
  name: 'ui',
  reducers: {
    setBoardDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.boardDialogOpen = action.payload
    },
    setCurrentBoardTab: (state, action: PayloadAction<number>) => {
      state.currentBoardTab = action.payload
    },
  },
})

export const { setBoardDialogOpen, setCurrentBoardTab } = UiSlice.actions

export default UiSlice.reducer
