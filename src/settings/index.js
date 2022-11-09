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
    agreement: '0x1cc1DfFE8252e1c9FC09a8A934b6fC5487369E6f',
  },
}

export default settings
