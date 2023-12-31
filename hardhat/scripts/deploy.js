const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a Zticketing

  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so ZticketingContract here is a factory for instances of our Zticketing contract.
  */
  // here we deploy the contract
 const ZticketingContract = await hre.ethers.deployContract("Zticketing");

  await ZticketingContract.waitForDeployment();

 // print the address of the deployed contract
  console.log("Zticketing Contract Address:", ZticketingContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });