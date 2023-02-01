

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.4', // solidity version of smart contract
  networks : {
    goerli : {
      url :"https://eth-goerli.g.alchemy.com/v2/k2GSNrRmvJt3TFO5tRTwZ6u1rH4dw0CR", // alchemy url for the deployment of smart contract
      accounts : [''] //private key
    }
  }
}
