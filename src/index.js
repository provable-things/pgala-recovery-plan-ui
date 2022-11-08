import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from './store'
import ThemeProvider, { ThemedGlobalStyle } from './theme/ThemeProvider'
import * as serviceWorker from './serviceWorker'

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <App />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
