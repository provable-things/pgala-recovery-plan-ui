/* eslint-disable import/first */
window.Buffer = require('buffer/').Buffer

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import store from './store'
import ThemeProvider, { ThemedGlobalStyle } from './theme/ThemeProvider'
import * as serviceWorker from './serviceWorker'

import App from './components/App'
import Check from './components/pages/Check'
import Faqs from './components/pages/Faqs'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/faqs',
    element: <Faqs />,
  },
  {
    path: 'check',
    element: <Check />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
