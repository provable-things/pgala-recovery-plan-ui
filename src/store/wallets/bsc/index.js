import Web3 from 'web3'
import Web3Modal from 'web3modal'
import EthereumProvider from '@walletconnect/ethereum-provider'
import BigNumber from 'bignumber.js'

import { WALLET_BSC_CONNECTED, WALLET_BSC_DISCONNECTED, WALLET_BSC_ACCOUNT_CHANGED } from '../../../constants'
import settings from '../../../settings'
import { setupNetwork } from '../../../utils/wallet'
import { getWeb3ModalTheme } from '../../../theme/web3-modal'
import { getWalletProviderByBlockchain } from '../wallets.selectors'

let web3Modal

const walletConnectV2Connector = async (_package) => {
  const provider = await _package.init({
    projectId: process.env.REACT_APP_WC2_PROJECT_ID,
    chains: [56],
    showQrModal: true,
    methods: ['eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData'],
    events: ['chainChanged', 'accountsChanged'],
  })

  await provider.connect()
  return provider
}

const connectWithBscWallet = async (_dispatch) => {
  try {
    if (document.getElementById('WEB3_CONNECT_MODAL_ID')) {
      document.getElementById('WEB3_CONNECT_MODAL_ID').remove()
    }

    web3Modal = new Web3Modal({
      theme: getWeb3ModalTheme('light'),
      providerOptions: {
        'custom-walletconnectv2': {
          display: {
            logo: './assets/png/wc2.png',
            name: 'WalletConnect V2',
            description: 'Connect through WalletConnect V2',
          },
          options: {
            showQrModal: true,
          },
          package: EthereumProvider,
          connector: walletConnectV2Connector,
        },
      },
    })

    const provider = await web3Modal.connect()
    _connectionSuccesfull(provider, _dispatch, {
      type: 'multiWallet',
    })

    /*provider.on('chainChanged', _chainId => {
      if (Number(_chainId) !== settings.rpc.mainnet.bsc.chainId) {
        toastr.error('Invalid Binance Smart Chain Network. Please use chainId = settings.rpc.mainnet.bsc.chainId')
        return
      }
    })*/

    provider.on('accountsChanged', (_accounts) => {
      _dispatch({
        type: WALLET_BSC_ACCOUNT_CHANGED,
        payload: {
          account: _accounts[0],
        },
      })
    })
  } catch (_err) {
    console.error(_err)
  }
}

const disconnectFromBscWallet = async (_dispatch) => {
  const provider = getWalletProviderByBlockchain('BSC')
  if (provider.close) {
    await provider.close()
  }
  await web3Modal.clearCachedProvider()
  _dispatch({
    type: WALLET_BSC_DISCONNECTED,
  })
}

const _connectionSuccesfull = async (_provider, _dispatch) => {
  try {
    const { accounts, chainId } = _provider
    const account = accounts ? accounts[0] : await _getAccount(_provider)

    if (!BigNumber(chainId).isEqualTo(56) && _provider.isMetaMask) {
      await setupNetwork({
        provider: _provider,
        chainId: 56,
        chainName: 'Binance Smart Chain',
        nativeCurrency: {
          name: 'BNB',
          symbol: 'bnb',
          decimals: 18,
        },
        nodes: [settings.rpc.bsc.endpoint],
        blockExplorerUrls: [settings.explorers.mainnet.bsc],
      })

      _dispatch({
        type: WALLET_BSC_CONNECTED,
        payload: {
          provider: _provider,
          account,
          network: 'mainnet',
          chainId: 56,
        },
      })
      return
    } else if (BigNumber(chainId).isEqualTo(56)) {
      _dispatch({
        type: WALLET_BSC_CONNECTED,
        payload: {
          provider: _provider,
          account,
          network: 'mainnet',
          chainId,
        },
      })
    }
  } catch (_err) {
    console.error(_err)
  }
}

const _getAccount = async (_provider) => {
  try {
    const web3 = new Web3(_provider)
    const accounts = await web3.eth.getAccounts()
    return accounts[0]
  } catch (_err) {
    console.error(`Error during getting Binance Smart Chain account ${_err.message}`)
  }
}

export { connectWithBscWallet, disconnectFromBscWallet }
