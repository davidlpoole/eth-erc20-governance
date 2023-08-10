# 🏁 ERC-20 Governance on Sepolia

Deploy the governor contract and token on the Sepolia test network.

- Add a Sepolia URL and private key to the hardhat config so that you can interact with the test network through Hardhat.
- Reconfigure the contracts and deployment scripts
  - Use a different voting period in MyGovernor. 
  - delegate the votes to the owner
  - create a proposal
  - vote on the proposal
  - execute the proposal
- Deploy the contracts to Sepolia `npx hardhat run scripts/deploy.js --network sepolia`.

Make use of the ethers.getContractAt method which will allow you to specify a contract name and where it is deployed. 
This way you can build scripts that interact with the existing MyGovernor and MyToken contracts after you've deployed them.