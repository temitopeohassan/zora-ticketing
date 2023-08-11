const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  
  const ZticketNFTContract = await hre.ethers.deployContract("ZticketNFT");
  await ZticketNFTContract.waitForDeployment();
  console.log("ZticketNFT Contract Address:", ZticketNFTContract.address);

  
  const ZticketingContract = await hre.ethers.deployContract("Zticketing", [ZticketNFTContract.address]);
  await ZticketingContract.waitForDeployment();
  console.log("Zticketing Contract Address:", ZticketingContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
