const blockchainSymbolToName = {
  BSC: 'Binance Smart Chain',
}

const blockchainSymbolToCoin = {
  BSC: 'Binance Coin',
}

const getAssetFromNativeSymbol = (_assets, _symbol) => _assets.find(({ symbol }) => symbol === _symbol)

const getWorkingNameForNodeSelection = (_workingName) =>
  _workingName.toLowerCase() === 'peth' ? 'pweth' : _workingName.toLowerCase()

export { blockchainSymbolToName, getAssetFromNativeSymbol, blockchainSymbolToCoin, getWorkingNameForNodeSelection }
