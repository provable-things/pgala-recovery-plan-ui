import { WALLET_BSC_CONNECTED, WALLET_BSC_ACCOUNT_CHANGED, WALLET_BSC_DISCONNECTED } from '../../constants/index'

const initialState = {
  bsc: {
    provider: null,
    account: null,
    chainId: null,
    network: null,
  },
}

const walletsReducer = (_state = initialState, _action) => {
  if (_action.type === WALLET_BSC_CONNECTED) {
    const { provider, account, network, chainId } = _action.payload
    return Object.assign({}, _state, {
      bsc: {
        provider,
        account,
        network,
        chainId,
      },
    })
  }
  if (_action.type === WALLET_BSC_ACCOUNT_CHANGED) {
    const { account } = _action.payload
    return Object.assign({}, _state, {
      bsc: {
        ..._state.bsc,
        account,
      },
    })
  }
  if (_action.type === WALLET_BSC_DISCONNECTED) {
    return Object.assign({}, _state, {
      bsc: {
        provider: null,
        account: null,
        network: null,
      },
    })
  }
  return _state
}

export default walletsReducer
