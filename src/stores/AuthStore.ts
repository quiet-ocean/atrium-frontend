import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as authApi from '../services/authApi'

import { setLoggedIn, setPlayerAvatar, setPlayerName } from './UserStore'

// import { RootState } from '.'

export const login = createAsyncThunk(
  '/auth/login',
  async (accountId: string, { dispatch }) => {
    const response = await authApi.login({ accountId: accountId })
    console.log(response)
    if (response.status === 401 || response.data.error) {
      dispatch(clearToken())
      return { accessToken: '' }
    } else {
      dispatch(setLoggedIn(true))
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
    console.log(response)
    // console.log(response);
    if (response.status === 401 || response.data.error) {
      dispatch(clearToken())
      return { accessToken: '' }
    } else {
      return response.data
    }
  }
)

export const authSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken
    })
    builder.addCase(requestUser.fulfilled, (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    })
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log(state)
      state.accessToken = action.payload.accessToken
    })
  },
  initialState: {
    accessToken: '',
    user: {},
  },
  name: 'auth',
  reducers: {
    clearToken: (state) => {
      state.accessToken = ''
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.accessToken = action.payload
    },
    setUser: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      console.log(state.user)
      let oldUser = state.user
      state.user = { ...oldUser, ...action.payload }
    },
  },
})

export const { setAccessToken, clearToken, setUser } = authSlice.actions

export default persistReducer(
  { key: 'auth', storage, whitelist: ['accessToken'] },
  authSlice.reducer
)
