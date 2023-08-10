const {mine} = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  await mine(300);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
