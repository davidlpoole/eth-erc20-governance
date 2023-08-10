const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const token = await ethers.getContractAt("MyToken", "0xe22BDb8ae9130d307F6D969fB224F8Ec1076c4Be");

  await token.delegate(owner.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
