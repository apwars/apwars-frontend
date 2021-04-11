import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // add team(0 no team, 1 - humans, 2 - orcs)
  {
    pid: 0,
    internalPID: 0,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 5,
    lpSymbol: 'wGOLD - BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wGOLD',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    internalPID: 1,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'wGOLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2c48f43cd2f73324db4c32f05fd1bc38119e6e84',
    },
    tokenSymbol: 'wGOLD',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    internalPID: 2,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    internalPID: 3,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    internalPID: 4,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 5,
    internalPID: 5,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BUSD-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 6,
    internalPID: 6,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbECDD23A16DfA5573dF54d98F7CaAE03019',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    internalPID: 7,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0Ed8E0A2D99643e1e65CCA22Ed4424090B8B7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    internalPID: 8,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  // TIER:1
  {
    isTokenOnly: true,
    pid: 9,
    internalPID: 0,
    farmManager: '0xEA4e22f56d484905A42f1bFc023Bd9D0781Dcb4e',
    farmManagerVersion: 'v2',
    rewardTip: 'wWARRIOR',
    team: 1,
    tier: 1,
    risk: 3,
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wWARRIOR',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 10,
    internalPID: 0,
    farmManager: '0xe32f33e852ff1ab47806814fe75b8a2e4be31100',
    farmManagerVersion: 'v2',
    rewardTip: 'wARCHER',
    team: 1,
    tier: 1,
    risk: 3,
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wARCHER',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 11,
    internalPID: 0,
    farmManager: '0x1234FB622B7e4831F0d5Ec9e34f26710CfA1fd29',
    farmManagerVersion: 'v2',
    rewardTip: 'wGRUNT',
    team: 1,
    tier: 1,
    risk: 3,
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wGRUNT',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 12,
    internalPID: 0,
    farmManager: '0x10fddf14be3cf6e0e368ecf8d10a423895933c0d',
    farmManagerVersion: 'v2',
    rewardTip: 'wORC-ARCHER',
    team: 1,
    tier: 1,
    risk: 3,
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wORC-ARCHER',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
