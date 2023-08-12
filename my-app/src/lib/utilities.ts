import supportedChains from './chains'
import { IChainData } from './types'

export function getChainData(chainId?: number): IChainData {
  if (!chainId) {
//@ts-ignore
    return null
  }
  const chainData = supportedChains.filter(
    (chain: any) => chain.chain_id === chainId
  )[0]

  if (!chainData) {
    throw new Error('ChainId missing or not supported')
  }

  return chainData
}

export function ellipseAddress(address = '', width = 10): string {
  if (!address) {
    return ''
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`
}
