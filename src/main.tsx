import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => <h1>app</h1>

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(<App />)
    })
} else {
  root.render(<App />)
}
