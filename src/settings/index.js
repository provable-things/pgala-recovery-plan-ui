const settings = {
  termsMultiHash: '',
  terms: 'https://ipfs.io/ipfs/',
  rpc: {
    mainnet: {
      bsc: {
        endpoint: process.env.REACT_APP_BSC_NODE,
      },
    },
  },
  explorers: {
    mainnet: {
      bsc: 'https://bscscan.com',
    },
  },
  contracts: {
    agreement: '0xB2F13303F703138352c695b895148124716Eb769',
  },
}

export default settings
