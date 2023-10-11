const settings = {
  termsMultiHash: 'QmTxt1WE5NWrvRVSWyoxmnQPeDSuE7TLXSxmHd5KBmWNWt',
  terms: 'https://cf-ipfs.com/ipfs/QmTxt1WE5NWrvRVSWyoxmnQPeDSuE7TLXSxmHd5KBmWNWt',
  pGalaStep1ClaimUrl: 'https://pgala-recovery-plan.p.network',
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
    agreement: '0x21f7677bF1Aac28d56E960dc7Bff0DE74A67dd97',
  },
}

export default settings
