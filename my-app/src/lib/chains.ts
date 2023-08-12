import { IChainData } from './types'

const supportedChains: IChainData[] = [
  
  {
    name: 'Zora Goerli',
    short_name: 'gor',
    chain: 'ETH',
    network: 'goerli',
    chain_id: 5,
    network_id: 999,
    rpc_url: 'https://testnet.rpc.zora.energy',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
]

export default supportedChains
