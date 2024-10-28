0x00000000219ab540356cbb839cbe05303d7705fa

const { ethers } = require("ethers");   
const provider = new ethers.JsonRpcProvider(
  "https://goerli.infura.io/v3/69009c44e56c499ab0651b9598d9a3b8"
);

//while not getting goerli in  infura, will ask..

const walletAddress = "0x00000000219ab540356cbb839cbe05303d7705fa";

const contractInteraction = async () => {
  const walletContracts = new ethers.Contract(walletAddress, walletAbi, provider);
  console.log("Balance of the address", walletContracts);
     ekgbfgfsadfsdgdsfds
  const contractName = await walletContracts.name();
  console.log("Name of the contract", contractName);

  const num = await walletContracts.getValue();
  console.log("Value of the contract", num);

  const contractBalance = await walletContracts.contractBalance();
  console.log("Contract balance", contractBalance);

  const userBalance = await walletContracts.accountBalance();

}
