const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const governor = await ethers.getContractAt("MyGovernor", "0x86849bc8218450D502AddaC89178954794186fd2");
  const token = await ethers.getContractAt("MyToken", "0xe22BDb8ae9130d307F6D969fB224F8Ec1076c4Be");

  const balance1 = await token.balanceOf(owner.address);
  console.log(balance1);

  await governor.execute(
      [token.address],
      [0],
      [token.interface.encodeFunctionData("mint", [owner.address, ethers.utils.parseEther("25000")])],
      ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Give the owner more tokens!"))
  );

  const balance2 = await token.balanceOf(owner.address);
  console.log(balance2);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
