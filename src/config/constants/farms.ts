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
    race: 'All',
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
    race: 'All',
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
    pid: 31,
    internalPID: 17,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 5,
    race: 'All',
    lpSymbol: 'wCOURAGE - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x08c6D471f4F59801a9fE1b3A6905325ACb3ea8FD',
    },
    tokenSymbol: 'wCOURAGE',
    tokenAddresses: {
      97: '',
      56: '0x5f51a3ce7f2233777328866f477e86a91ca9ddec',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },

  // Barracks
  {
    pid: 13,
    internalPID: 9,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 1,
    tier: 0,
    risk: 5,
    race: 'Barracks',
    lpSymbol: 'wWARRIOR - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x6CABE6C94DC8BC63F8b71BBA7B2ed3381B1fe6e9',
    },
    tokenSymbol: 'wWARRIOR',
    tokenAddresses: {
      97: '',
      56: '0x54f653f539a78d3db0e0d3b166cf32c4f6cc5fb6',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 14,
    internalPID: 11,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 1,
    tier: 0,
    risk: 5,
    race: 'Barracks',
    lpSymbol: 'wARCHER - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x764A521590ebd2686cC629E47f3464E8fD53b0F0',
    },
    tokenSymbol: 'wARCHER',
    tokenAddresses: {
      97: '',
      56: '0xAA2E03E7838148ce9FAd6Ce4C00275D89127A03e',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 15,
    internalPID: 10,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'Barracks',
    lpSymbol: 'wGRUNT - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x8C58f3aEe4924D0Ab0a8e0Ee680a6611296573FF',
    },
    tokenSymbol: 'wGRUNT',
    tokenAddresses: {
      97: '',
      56: '0xd7544Fe7668f3dfb7AD21F9E02D7A51e116b6D75',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 16,
    internalPID: 12,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'Barracks',
    lpSymbol: 'wORC-ARCHER - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x9e15154b80a68191E2D5C4B220a24bd99a422DeE',
    },
    tokenSymbol: 'wORC-ARCHER',
    tokenAddresses: {
      97: '',
      56: '0x934e11a44b2e817fe9bd6f337ef21bd35e46080e',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 36,
    internalPID: 20,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 3,
    race: 'Barracks',
    lpSymbol: 'wSKELETON-WARRIOR - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xf101954d51ffc12640b006e9c951ffebbd6b7259',
    },
    tokenSymbol: 'wSKELETON-WARRIOR',
    tokenAddresses: {
      97: '',
      56: '0xb5d488dc4DE64A6a968D8f317DB8DE2cDBF52828',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 37,
    internalPID: 21,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 3,
    race: 'Barracks',
    lpSymbol: 'wHOUND - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xe8eae2eac9e1d87932c4e94303894ac28304ee23',
    },
    tokenSymbol: 'wHOUND',
    tokenAddresses: {
      97: '',
      56: '0x4D21177Bf8a0F9cfAca6d0f568Ff3e79a121B106',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },

  // Armory
  {
    pid: 21,
    internalPID: 13,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 1,
    tier: 0,
    risk: 5,
    race: 'Armory',
    lpSymbol: 'wARMORED-WARRIOR - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xcb7a7E4257ABC87745B40B5b51B82FFFBAa087A0',
    },
    tokenSymbol: 'wARMORED-WARRIOR',
    tokenAddresses: {
      97: '',
      56: '0xd67761dF2b76eE251d48816691f5ff7728d94DAa',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 22,
    internalPID: 15,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 1,
    tier: 0,
    risk: 5,
    race: 'Armory',
    lpSymbol: 'wCROSSBOWMAN - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xEd5D84185d0BB1d9fEAF7b59F38220Fc26F4FDD0',
    },
    tokenSymbol: 'wCROSSBOWMAN',
    tokenAddresses: {
      97: '',
      56: '0xA0ecF9c7114eFFB43440B95D54e09A2a67331236',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 23,
    internalPID: 14,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'Armory',
    lpSymbol: 'wARMORED-GRUNT - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xc0749fA16072c377B786213aCa2837D4Aa203c8A',
    },
    tokenSymbol: 'wARMORED-GRUNT',
    tokenAddresses: {
      97: '',
      56: '0x56c09E954690d80C5728194f7eAf473737Dc2180',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 24,
    internalPID: 16,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'Armory',
    lpSymbol: 'wPIKE-ORC - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xC3Bc2A25C100fEf3A38f99543f89dCE330ceaBa0',
    },
    tokenSymbol: 'wPIKE-ORC',
    tokenAddresses: {
      97: '',
      56: '0x491c739efd076655f7D8D0DB545b7fb09DdF517f',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 42,
    internalPID: 22,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 3,
    race: 'Armory',
    lpSymbol: 'wUNDEAD-ARCHER - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xdf9aff48816e5e9930b050b7ab8ec2de04db2772',
    },
    tokenSymbol: 'wUNDEAD-ARCHER',
    tokenAddresses: {
      97: '',
      56: '0xd048cDf2e870E60D46527463a14aEFC0377D754c',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 43,
    internalPID: 28,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 3,
    race: 'Armory',
    lpSymbol: 'wUNDEAD-PIKEMAN - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xD6406A6b247436bbc07a5B021740746c0dc1081d',
    },
    tokenSymbol: 'wUNDEAD-PIKEMAN',
    tokenAddresses: {
      97: '',
      56: '0x8b394cfAeBA9812801C92388570C95208Ad1300D',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },

  // ArcaneLibrary
  {
    pid: 32,
    internalPID: 18,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 1,
    tier: 0,
    risk: 5,
    race: 'ArcaneLibrary',
    lpSymbol: 'wWIZARD - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x651e5fe33a17f39e65c94a4e4d6aa220c33c9b2b',
    },
    tokenSymbol: 'wWIZARD',
    tokenAddresses: {
      97: '',
      56: '0x1225C7999483544c7859fE5A23c9Be70d14d5378',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 33,
    internalPID: 19,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'ArcaneLibrary',
    lpSymbol: 'wSHAMAN - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xa6ab5c50f7db14b96d03e64ae3fe3b0041f6ae0c',
    },
    tokenSymbol: 'wSHAMAN',
    tokenAddresses: {
      97: '',
      56: '0x10eAAC888b70aBE542a50b787ABe7f94b8989CB7',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },

  // Stables
  {
    pid: 47,
    internalPID: 25,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'Stables',
    lpSymbol: 'wDEATHK-NIGHT - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xa24d5abc184604b5e779c8a6ff5003544a996657',
    },
    tokenSymbol: 'wDEATHK-NIGHT',
    tokenAddresses: {
      97: '',
      56: '0x7537e9607b962434d4a9e50eE25e2F38B1F00Ef2',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 49,
    internalPID: 26,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 2,
    tier: 0,
    risk: 5,
    race: 'Stables',
    lpSymbol: 'wWARG - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xcfe993fbf111cb2de1f17536661519741a7a6582',
    },
    tokenSymbol: 'wWARG',
    tokenAddresses: {
      97: '',
      56: '0x66e22551BCe75874f91d46dB684621500C9480ae',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    pid: 51,
    internalPID: 27,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 1,
    tier: 0,
    risk: 5,
    race: 'Stables',
    lpSymbol: 'wHORSEMAN - wGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xfd82da44f0098741bbe10681208390c57f9a7c27',
    },
    tokenSymbol: 'wHORSEMAN',
    tokenAddresses: {
      97: '',
      56: '0x820c6a4f940a4470E9D2933aAb831a2eE7508fcF',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },

  {
    pid: 2,
    internalPID: 2,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    race: 'All',
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
    race: 'All',
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
    race: 'All',
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x680Dd100E4b394Bda26A59dD5c119A391e747d18',
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
    race: 'All',
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
    race: 'All',
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
    race: 'All',
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
    race: 'All',
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
    race: 'All',
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
    race: 'All',
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
    team: 2,
    tier: 1,
    risk: 3,
    race: 'All',
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
    team: 2,
    tier: 1,
    risk: 3,
    race: 'All',
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
  {
    isTokenOnly: true,
    pid: 34,
    internalPID: 0,
    farmManager: '0xE56a2BB9C5b75D8E2c0A84Fe312051A11bB12c7C',
    farmManagerVersion: 'v2',
    rewardTip: 'wSKELETON-WARRIOR',
    team: 2,
    tier: 1,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wSKELETON-WARRIOR',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 35,
    internalPID: 0,
    farmManager: '0x90Dd6771273eB5F1b1e2852D4871482Dfb9B009f',
    farmManagerVersion: 'v2',
    rewardTip: 'wHOUND',
    team: 2,
    tier: 1,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wHOUND',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },

  // TIER:2
  {
    isTokenOnly: true,
    pid: 17,
    internalPID: 0,
    farmManager: '0xc882036156CdCEcdF4F392859B376D5f2FF8cD33',
    farmManagerVersion: 'v2',
    rewardTip: 'wARMORED-WARRIOR',
    team: 1,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wARMORED-WARRIOR',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 25,
    internalPID: 1,
    farmManager: '0xc882036156CdCEcdF4F392859B376D5f2FF8cD33',
    farmManagerVersion: 'v2',
    rewardTip: 'wARMORED-WARRIOR',
    team: 1,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wWARRIOR',
    lpAddresses: {
      97: '',
      56: '0x6CABE6C94DC8BC63F8b71BBA7B2ed3381B1fe6e9',
    },
    tokenSymbol: 'wARMORED-WARRIOR',
    tokenAddresses: {
      97: '',
      56: '0x54f653f539a78d3db0e0d3b166cf32c4f6cc5fb6',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
    icon: 'warmored-warrior-wwarrior',
  },

  {
    isTokenOnly: true,
    pid: 18,
    internalPID: 0,
    farmManager: '0x724ad37bDe593672Ef508ba7eB227EAccf4b370F',
    farmManagerVersion: 'v2',
    rewardTip: 'wCROSSBOWMAN',
    team: 1,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wCROSSBOWMAN',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 26,
    internalPID: 1,
    farmManager: '0x724ad37bDe593672Ef508ba7eB227EAccf4b370F',
    farmManagerVersion: 'v2',
    rewardTip: 'wCROSSBOWMAN',
    team: 1,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wARCHER',
    lpAddresses: {
      97: '',
      56: '0x764A521590ebd2686cC629E47f3464E8fD53b0F0',
    },
    tokenSymbol: 'wCROSSBOWMAN',
    tokenAddresses: {
      97: '',
      56: '0xAA2E03E7838148ce9FAd6Ce4C00275D89127A03e',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
    icon: 'wcrossbowman-warcher',
  },

  {
    isTokenOnly: true,
    pid: 19,
    internalPID: 0,
    farmManager: '0xa7C4Df300eA5B16E3C02E36A53e9456b0074A17d',
    farmManagerVersion: 'v2',
    rewardTip: 'wARMORED-GRUNT',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wARMORED-GRUNT',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 27,
    internalPID: 1,
    farmManager: '0xa7C4Df300eA5B16E3C02E36A53e9456b0074A17d',
    farmManagerVersion: 'v2',
    rewardTip: 'wARMORED-GRUNT',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGRUNT',
    lpAddresses: {
      97: '',
      56: '0x8C58f3aEe4924D0Ab0a8e0Ee680a6611296573FF',
    },
    tokenSymbol: 'wARMORED-GRUNT',
    tokenAddresses: {
      97: '',
      56: '0xd7544Fe7668f3dfb7AD21F9E02D7A51e116b6D75',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
    icon: 'warmored-grunt-wgrunt',
  },

  {
    isTokenOnly: true,
    pid: 20,
    internalPID: 0,
    farmManager: '0x08bBA42794b1511E24831dc26877f81f5fdc20b3',
    farmManagerVersion: 'v2',
    rewardTip: 'wPIKE-ORC',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9',
    },
    tokenSymbol: 'wPIKE-ORC',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    isTokenOnly: true,
    pid: 28,
    internalPID: 1,
    farmManager: '0x08bBA42794b1511E24831dc26877f81f5fdc20b3',
    farmManagerVersion: 'v2',
    rewardTip: 'wPIKE-ORC',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wORC-ARCHER',
    lpAddresses: {
      97: '',
      56: '0x9e15154b80a68191E2D5C4B220a24bd99a422DeE',
    },
    tokenSymbol: 'wPIKE-ORC',
    tokenAddresses: {
      97: '',
      56: '0x934e11a44b2e817fe9bd6f337ef21bd35e46080e',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
    icon: 'wpike-orc-worc-archer',
  },

  {
    isTokenOnly: true,
    pid: 38,
    internalPID: 0,
    farmManager: '0x550a370BDb1342Ea1024Ec7F67534f64EE4b35c3',
    farmManagerVersion: 'v2',
    rewardTip: 'wUNDEAD-ARCHER',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xdf9aff48816e5e9930b050b7ab8ec2de04db2772',
    },
    tokenSymbol: 'wUNDEAD-ARCHER',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    isTokenOnly: true,
    pid: 39,
    internalPID: 2,
    farmManager: '0x550a370BDb1342Ea1024Ec7F67534f64EE4b35c3',
    farmManagerVersion: 'v2',
    rewardTip: 'wUNDEAD-ARCHER',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wSKELETON-WARRIOR',
    lpAddresses: {
      97: '',
      56: '0xf101954d51ffc12640b006e9c951ffebbd6b7259',
    },
    tokenSymbol: 'wUNDEAD-ARCHER',
    tokenAddresses: {
      97: '',
      56: '0xb5d488dc4DE64A6a968D8f317DB8DE2cDBF52828',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
    icon: 'wundead-archer-wskeletonwarrior',
  },

  {
    isTokenOnly: true,
    pid: 40,
    internalPID: 0,
    farmManager: '0x4Fb3fD5c747d900Cf8Ef9846D9898D4542521B44',
    farmManagerVersion: 'v2',
    rewardTip: 'wUNDEAD-PIKEMAN',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wGOLD',
    lpAddresses: {
      97: '',
      56: '0xD6406A6b247436bbc07a5B021740746c0dc1081d',
    },
    tokenSymbol: 'wUNDEAD-PIKEMAN',
    tokenAddresses: {
      97: '',
      56: '0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
  },
  {
    isTokenOnly: true,
    pid: 41,
    internalPID: 1,
    farmManager: '0x4Fb3fD5c747d900Cf8Ef9846D9898D4542521B44',
    farmManagerVersion: 'v2',
    rewardTip: 'wUNDEAD-PIKEMAN',
    team: 2,
    tier: 2,
    risk: 3,
    race: 'All',
    lpSymbol: 'wHOUND',
    lpAddresses: {
      97: '',
      56: '0xe8eae2eac9e1d87932c4e94303894ac28304ee23',
    },
    tokenSymbol: 'wUNDEAD-PIKEMAN',
    tokenAddresses: {
      97: '',
      56: '0x4D21177Bf8a0F9cfAca6d0f568Ff3e79a121B106',
    },
    quoteTokenSymbol: QuoteToken.wGOLD,
    quoteTokenAdresses: contracts.wGOLD,
    icon: 'wundead-pikeman-whound',
  },

  // TIER:3
  {
    pid: 29,
    internalPID: 0,
    farmManager: '0xBbA48341Dc7BA19E6262c92b8344c8aa042A71fb',
    farmManagerVersion: 'v2',
    rewardTip: 'wWIZARD',
    team: 1,
    tier: 3,
    risk: 3,
    race: 'All',
    lpSymbol: 'wCROSSBOWMAN - wARMORED-WARRIOR LP',
    lpAddresses: {
      97: '',
      56: '0x2DA56FBA7D1c881092675653Bf9da67eD1825379',
    },
    tokenSymbol: 'wWIZARD',
    tokenAddresses: {
      97: '',
      56: '0x1225C7999483544c7859fE5A23c9Be70d14d5378',
    },
    quoteTokenSymbol: QuoteToken.wARMOREDWARRIOR,
    quoteTokenAdresses: contracts.wARMOREDWARRIOR,
  },
  {
    pid: 30,
    internalPID: 0,
    farmManager: '0xB42FD0B3ED00e4320197943a26d491609883302d',
    farmManagerVersion: 'v2',
    rewardTip: 'wSHAMAN',
    team: 2,
    tier: 3,
    risk: 3,
    race: 'All',
    lpSymbol: 'wPIKE-ORC-wARMORED-GRUNT LP',
    lpAddresses: {
      97: '',
      56: '0x045206D14B9dcC946131419BdF28477936899e17',
    },
    tokenSymbol: 'wSHAMAN',
    tokenAddresses: {
      97: '',
      56: '0x10eAAC888b70aBE542a50b787ABe7f94b8989CB7',
    },
    quoteTokenSymbol: QuoteToken.wARMOREDGRUNT,
    quoteTokenAdresses: contracts.wARMOREDGRUNT,
  },

  // TIER:4
  {
    isTokenOnly: true,
    pid: 46,
    internalPID: 0,
    farmManager: '0x365D9dFF6915C1986Ce2f7CBb9a500BfdeC5521C',
    farmManagerVersion: 'v2',
    rewardTip: 'wDEATHK-NIGHT',
    team: 2,
    tier: 4,
    risk: 3,
    race: 'All',
    lpSymbol: 'wCOURAGE',
    lpAddresses: {
      97: '',
      56: '0xfd153cf0f0d38933865cff58791ed16f938c6256',
    },
    tokenSymbol: 'wDEATHK-NIGHT',
    tokenAddresses: {
      97: '',
      56: '0x5F51A3ce7f2233777328866F477E86a91CA9DdeC',
    },
    quoteTokenSymbol: QuoteToken.wCOURAGE,
    quoteTokenAdresses: contracts.wCOURAGE,
  },
  {
    isTokenOnly: true,
    pid: 48,
    internalPID: 0,
    farmManager: '0xC10ac98B3e5A27663EAd7dEFE6Edb3E67DdD7F09',
    farmManagerVersion: 'v2',
    rewardTip: 'wWARG',
    team: 2,
    tier: 4,
    risk: 3,
    race: 'All',
    lpSymbol: 'wCOURAGE',
    lpAddresses: {
      97: '',
      56: '0xaB8561304194F35c355c181693c63003eD79F32C',
    },
    tokenSymbol: 'wWARG',
    tokenAddresses: {
      97: '',
      56: '0x5F51A3ce7f2233777328866F477E86a91CA9DdeC',
    },
    quoteTokenSymbol: QuoteToken.wCOURAGE,
    quoteTokenAdresses: contracts.wCOURAGE,
  },
  {
    isTokenOnly: true,
    pid: 50,
    internalPID: 0,
    farmManager: '0x76D1FE132B1004f458Ed833392e33E1a483a0849',
    farmManagerVersion: 'v2',
    rewardTip: 'wHORSEMAN',
    team: 1,
    tier: 4,
    risk: 3,
    race: 'All',
    lpSymbol: 'wCOURAGE',
    lpAddresses: {
      97: '',
      56: '0x15Ce8078E7230c129f1BdbDB5b2C0d84d3064340',
    },
    tokenSymbol: 'wHORSEMAN',
    tokenAddresses: {
      97: '',
      56: '0x5F51A3ce7f2233777328866F477E86a91CA9DdeC',
    },
    quoteTokenSymbol: QuoteToken.wCOURAGE,
    quoteTokenAdresses: contracts.wCOURAGE,
  },
]

export default farms
