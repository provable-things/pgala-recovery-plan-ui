import { connectWithBscWallet, disconnectFromBscWallet } from './bsc'

const connectWithWallet = (_blockchain) => {
  return async (_dispatch) => {
    switch (_blockchain) {
      case 'BSC': {
        connectWithBscWallet(_dispatch)
        break
      }
      default:
        break
    }
  }
}

const disconnectFromWallet = (_blockchain) => {
  return async (_dispatch) => {
    switch (_blockchain) {
      case 'BSC': {
        disconnectFromBscWallet(_dispatch)
        break
      }
      default:
        break
    }
  }
}

export { connectWithWallet, disconnectFromWallet }
