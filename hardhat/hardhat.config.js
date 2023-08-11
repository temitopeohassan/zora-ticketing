require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    'zora-goerli': {
      url: "https://testnet.rpc.zora.energy/",
      accounts: [PRIVATE_KEY]
    },
  },
};