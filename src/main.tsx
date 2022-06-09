import { Buffer } from 'buffer'

import 'regenerator-runtime/runtime'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react'

import 'antd/dist/antd.css'
// import './index.scss'
import './styles/index.scss'
import App from './App'
import muiTheme from './MuiTheme'
import { setGameGlobalScope } from './PhaserGame'
import store, { persistor } from './stores'
import { initNearContract, setupAxios } from './utils'

globalThis.Buffer = Buffer
window.addEventListener('load', () => setGameGlobalScope())

setupAxios(axios, store)

initNearContract().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={muiTheme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
