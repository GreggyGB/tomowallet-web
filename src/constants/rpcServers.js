export default {
  TOMOCHAIN_MAINNET: {
    type: 'http',
    host: 'http://206.189.39.242:8545',
    ws: 'ws://206.189.39.242:8546',
    networkId: 88,
    hdPath: "m/44'/889'/0'/0/",
  },
  TOMOCHAIN_TESTNET: {
    type: 'http',
    host: 'https://testnet.tomochain.com',
    ws: 'wss://testnet.tomochain.com',
    networkId: 89,
    hdPath: "m/44'/889'/0'/0/",
  },
};
