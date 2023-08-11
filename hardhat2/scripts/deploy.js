const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a ZticketNFT

  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so ZticketNFTContract here is a factory for instances of our ZticketNFT contract.
  */
  // here we deploy the contract
 const ZticketNFTContract = await hre.ethers.deployContract("ZticketNFT");

  await ZticketNFTContract.waitForDeployment();

 // print the address of the deployed contract
  console.log("ZticketNFT Contract Address:", ZticketNFTContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });