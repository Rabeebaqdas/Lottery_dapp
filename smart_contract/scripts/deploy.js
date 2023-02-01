
const hre = require("hardhat");

let vrfCoordinatorV2 = "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D";
let GasLane = "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15";
let SubscriptionId = 9355;
let CallbackGasLimit = 100000;

const main = async() => {

  const Lottery = await hre.ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(vrfCoordinatorV2,GasLane,SubscriptionId,CallbackGasLimit);

  await lottery.deployed();

  console.log("Transactions deployed to:", lottery.address);
}

  const runMain = async () => {
    try{
      await main();
        process.exit(0);
    }catch(error) {
      console.error(error)
      process.exit(1);
    }
}

runMain();

