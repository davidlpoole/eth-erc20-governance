const { ethers } = require("hardhat");

async function main() {
  const governor = await ethers.getContractAt("MyGovernor", "0x86849bc8218450D502AddaC89178954794186fd2");

  const proposalId = '80230526197747684879681963156986432416248055813720929635534630867788027701509';
  const tx = await governor.castVote(proposalId, 1);
  const receipt = await tx.wait();
  const voteCastEvent = receipt.events.find(x => x.event === 'VoteCast');
  console.log(voteCastEvent.args.voter);
  console.log(voteCastEvent.args.weight);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
