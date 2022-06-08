import 'regenerator-runtime/runtime'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
// import './index.scss'
import './styles/index.scss'
import App from './App'
import muiTheme from './MuiTheme'
import { setGameGlobalScope } from './PhaserGame'
import store from './stores'
import { initNearContract } from './utils'

window.addEventListener('load', () => setGameGlobalScope())

initNearContract().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
