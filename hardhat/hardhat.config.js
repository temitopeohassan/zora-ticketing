require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


const WALLET_KEY = process.env.WALLET_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    'zora-goerli': {
      url: "https://testnet.rpc.zora.energy/",
      accounts: [WALLET_KEY],
    },
  },
};