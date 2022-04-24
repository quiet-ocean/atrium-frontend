import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum WalletType {
  sender,
  near,
  none,
}
export interface AppState {
  username: string;
  message: string;
  avatar: number;
  wallet: WalletType;
  snackOpen: boolean;
  roomName: string;
}

export const initialState: AppState = {
  username: '',
  message: '',
  avatar: 0,
  wallet: WalletType.none,
  snackOpen: false,
  roomName: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;
    },
    setWallet: (state, action: PayloadAction<{ walletType: WalletType }>) => {
      state.wallet = action.payload.walletType;
    },
    setSnackOpen: (state, action: PayloadAction<{ open: boolean }>) => {
      state.snackOpen = action.payload.open;
    },
    showToast: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message;
      state.snackOpen = true;
    },
    setAvatar: (state, action: PayloadAction<{ id: number }>) => {
      state.avatar = action.payload.id;
    },
    setRoomName: (state, action: PayloadAction<{ roomName: string }>) => {
      state.roomName = action.payload.roomName;
    },
  },
});

export const { setUsername, setWallet, setSnackOpen, showToast, setAvatar, setRoomName } = appSlice.actions;

export default appSlice.reducer;
