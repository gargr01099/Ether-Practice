const {ethers} = require("ethers");
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/69009c44e56c499ab0651b9598d9a3b8");


const queryBlockchain = async()=>{
    const block = await provider.getBlockNumber();
    console.log("Cuurent block number",block);

// const balance = await provider.getBalance("0x00000000219ab540356cbb839cbe05303d7705fa");
// console.log("Balance of the address",balance);
queryBlockchain();
}