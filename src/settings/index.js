const settings = {
  termsMultiHash: '',
  terms: 'https://ipfs.io/ipfs/',
  rpc: {
    bsc: {
      endpoint: process.env.REACT_APP_BSC_NODE,
    },
  },
  explorers: {
    mainnet: {
      bsc: 'https://bscscan.com',
    },
  },
  contracts: {
    agreement: '0x7444125E365AEAf974cBAd104d2E6F100DbBAf10',
  },
}

export default settings
