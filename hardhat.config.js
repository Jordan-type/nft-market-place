require("@nomiclabs/hardhat-waffle");
require("dotenv").config(); 

const { API_URL_KEY, PRIVATE_KEY } = process.env; //environment variables are being loaded here.

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },

};
