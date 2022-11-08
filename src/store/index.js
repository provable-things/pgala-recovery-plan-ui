import { createStore, applyMiddleware, compose } from 'redux'
import { middleware } from '../middleware'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import walletsReducer from './wallets/wallets.reducer'

const rootReducer = combineReducers({
  wallets: walletsReducer,
})

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(middleware, thunk)))

export default store
