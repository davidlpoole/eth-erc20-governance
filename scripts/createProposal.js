const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const governor = await ethers.getContractAt("MyGovernor", "0x86849bc8218450D502AddaC89178954794186fd2");
  const token = await ethers.getContractAt("MyToken", "0xe22BDb8ae9130d307F6D969fB224F8Ec1076c4Be");

  const tx = await governor.propose(
      [token.address],
      [0],
      [token.interface.encodeFunctionData("mint", [owner.address, ethers.utils.parseEther("25000")])],
      "Give the owner more tokens!"
  );
  const receipt = await tx.wait();
  const event = receipt.events.find(x => x.event === 'ProposalCreated');
  const { proposalId } = event.args;
  console.log(proposalId)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
