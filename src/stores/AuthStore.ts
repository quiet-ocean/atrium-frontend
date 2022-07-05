import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as authApi from '../services/authApi'
import { setPlayerAvatar, setPlayerName } from './UserStore'

export const login = createAsyncThunk(
  '/auth/login',
  async (accountId: string, { dispatch }) => {
    const response = await authApi.login({ accountId: accountId })
    if (response.status === 401 || response.data.error) {
      dispatch(clearToken())
      return { accessToken: '' }
    } else {
      return response.data
    }
  }
)

export const requestUser = createAsyncThunk(
  '/auth/me',
  async (params, { dispatch }) => {
    const response = await authApi.getUserByToken()
    const user = response.data
    console.log('user:', user)
    dispatch(setPlayerName(user.username))
    dispatch(setPlayerAvatar(user.avatar))
    return response.data
  }
)

export const signup = createAsyncThunk(
  '/auth/signup',
  // async ({}, { getState, dispatch }) => {
  async (user: any, { dispatch }) => {
    const response = await authApi.signup(user)
    if (response.status === 401 || response.data.error) {
      dispatch(clearToken())
      return { accessToken: '' }
    } else {
      return response.data
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    user: {},
  },
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    clearToken: (state) => {
      state.accessToken = ''
    },
    setUser: (state, action: PayloadAction<any>) => {
      let oldUser = state.user
      state.user = { ...oldUser, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken
    })
    builder.addCase(requestUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(signup.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken
    })
  },
})

export const { setAccessToken, clearToken, setUser } = authSlice.actions

export default persistReducer(
  { storage, key: 'auth', whitelist: ['accessToken'] },
  authSlice.reducer
)
