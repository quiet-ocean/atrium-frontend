import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { initNearContract } from './utils/near';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CWindow } from './types/Window';

import './styles/index.scss';
// import './PhaserGame'
import muiTheme from './MuiTheme';
// import App from './App'
import Home from './Home';
// import reportWebVitals from './reportWebVitals';
import store from './stores';

declare let window: CWindow;

window.nearInitPromise = initNearContract().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          {/* <App /> */}
          <Home />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
