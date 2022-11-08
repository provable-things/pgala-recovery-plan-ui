import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { blockchainSymbolToName } from '../utils/maps'
import { slicer } from '../utils/account-viewer'
import { connectWithWallet, disconnectFromWallet } from '../store/wallets/wallets.actions'

const useWallets = () => {
  const wallets = useSelector((_state) => _state.wallets)
  const dispatch = useDispatch()

  return useMemo(() => {
    const walletsArr = Object.keys(wallets).map((_blockchain) => ({
      blockchain: _blockchain.toUpperCase(),
      formattedAccount: wallets[_blockchain].account ? slicer(wallets[_blockchain].account) : '-',
      formattedBlockchain: blockchainSymbolToName[_blockchain.toUpperCase()],
      ...wallets[_blockchain],
      isConnected: wallets[_blockchain] && wallets[_blockchain].account,
      connect: () => dispatch(connectWithWallet(_blockchain.toUpperCase())),
      disconnect: () => dispatch(disconnectFromWallet(_blockchain.toUpperCase())),
    }))

    const connectedWallets = walletsArr.filter(({ account }) => account)

    return {
      isConnected: connectedWallets.length > 0,
      connectedWallets,
      wallets: walletsArr,
    }
  }, [wallets, dispatch])
}

const useWalletByBlockchain = (_blockchain) => {
  const wallets = useSelector((_state) => _state.wallets)
  const dispatch = useDispatch()

  return useMemo(() => {
    if (!_blockchain) {
      return {
        isConnected: false,
        provider: null,
      }
    }

    const wallet = wallets[_blockchain.toLowerCase()]
    return {
      ...wallet,
      isConnected: wallet && wallet.account,
      provider: wallet && wallet.account ? wallet.provider : null,
      blockchain: _blockchain.toUpperCase(),
      formattedAccount: wallets[_blockchain.toLowerCase()].account
        ? slicer(wallets[_blockchain.toLowerCase()].account)
        : '-',
      formattedBlockchain: blockchainSymbolToName[_blockchain.toUpperCase()],
      connect: () => dispatch(connectWithWallet(_blockchain.toUpperCase())),
      disconnect: () => dispatch(disconnectFromWallet(_blockchain.toUpperCase())),
    }
  }, [wallets, _blockchain, dispatch])
}

export { useWallets, useWalletByBlockchain }
