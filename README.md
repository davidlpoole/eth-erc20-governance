# 🏁 ERC-20 Governance on Sepolia

Utilise OpenZeppelin's Governance contract wizard to deploy a decentralised governance system which allows a user to 
create a proposal (which contains some proposed code to execute), then allow all users (who hold the 'MyToken' ERC20 token which is deployed at the same time) to cast votes on whether the 
proposal should be accepted or rejected. If the proposal is accepted, the code can be executed.

## Tasks

Deploy the governor contract and token on the Sepolia test network.

- Add a Sepolia URL and private key to the hardhat config so that you can interact with the test network through Hardhat.
- Reconfigure the contracts and deployment scripts:
  - Use a different voting period in MyGovernor. 
  - delegate the votes to the owner
  - create a proposal
  - vote on the proposal
  - execute the proposal
- Deploy the contracts to Sepolia `npx hardhat run scripts/deploy.js --network sepolia`.

## Transactions on Sepolia Testnet
- [Deploy: MyGovernor](https://sepolia.etherscan.io/address/0x86849bc8218450d502addac89178954794186fd2)
- [Deploy: MyToken](https://sepolia.etherscan.io/address/0xe22bdb8ae9130d307f6d969fb224f8ec1076c4be)
- [Delegate (votes)](https://sepolia.etherscan.io/tx/0x10a067ccfdbe25d7f7a8a1b7b0edeb0ef0f98eef6e3cf3372cbf2f55343f34c5)
- [Create Proposal](https://sepolia.etherscan.io/tx/0xe90e2ed439a208183fa7e970a484b62155d87a096a50442f093903c59af720de)
- Wait 75 blocks for voting to open (Block 4061418 + 75)
- [Cast Vote](https://sepolia.etherscan.io/tx/0x1372dad015358168500a16f0be54e459394d3d641dea7d20da0bfe3780aac1f7)
- Wait 300 blocks for voting to close (Block 4061496 + 300)
- [Execute Proposal](https://sepolia.etherscan.io/tx/0xfa338f050a21ac4f5327229134931de0bcad266582c5c1df51eae8b02e66a6f3)


## TODO:
Dependency npm:@openzeppelin/contracts:4.8.0 is vulnerable, safe version 4.8.3  
CVE-2023-26488  
6.5 Incorrect Calculation vulnerability with medium severity found CVE-2023-30542  
8.8 Improper Input Validation vulnerability pending CVSS allocation CVE-2023-30541  
5.3 Interpretation Conflict vulnerability pending CVSS allocation