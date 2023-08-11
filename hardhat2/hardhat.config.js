require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  solidity: "0.8.4",
  networks: {
    'zora-goerli': {
      url: "https://testnet.rpc.zora.energy/",
      accounts: [PRIVATE_KEY],
      gasPrice: 500000
    },
  },
  etherscan: {
    apiKey: {
      'zora-goerli': [ETHERSCAN_API_KEY]
    },
    customChains: [
      {
        network: "zora-goerli",
        chainId: 999,
        urls: {
          apiURL: "https://testnet.explorer.zora.energy/api",
          browserURL: "https://testnet.explorer.zora.energy"
        }
      }
    ]
  }
};