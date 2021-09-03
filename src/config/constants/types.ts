export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'wGOLD' = 'wGOLD',
  'wARMOREDGRUNT' = 'wARMORED-GRUNT',
  'wUNDEADPIKEMAN' = 'wUNDEADPIKEMAN',
  'wCROSSBOWMAN' = 'wCROSSBOWMAN',
  'wPIKEORC' = 'wPIKE-ORC',
  'wARMOREDWARRIOR' = 'wARMORED-WARRIOR',
  'wBLADEMASTER' = 'wBLADEMASTER',
  'wCOURAGE' = 'wCOURAGE',
  'BUSD' = 'BUSD',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'USDC' = 'USDC',
  'DAI' = 'DAI',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export interface Address {
  97?: string
  56: string
}

export interface FarmConfig {
  pid: number
  internalPID: number
  team: number // (0 no team, 1 - humans, 2 - orcs)
  tier: number
  icon?: string
  rewardTip: string
  lpSymbol: string
  race?: string
  farmManager: string
  farmManagerBaseTokenAddress?: string
  farmManagerVersion?: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  quoteTokenBlanceLP?: any
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  tokenDecimals: number
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}
