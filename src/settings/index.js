const settings = {
  termsMultiHash: 'QmShGLRoEDbghUWBux6ndGTiBkeoKBrXdR1y1HPGsdkDyv',
  terms: 'https://cf-ipfs.com/ipfs/QmShGLRoEDbghUWBux6ndGTiBkeoKBrXdR1y1HPGsdkDyv',
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
    agreement: '0xA25E11Cb5FB8a114335010a19eb0D3751C376F5a',
  },
}

export default settings
