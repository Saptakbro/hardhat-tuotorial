require("@nomiclabs/hardhat-waffle");

const {ALCHEMY_API_KEY} = process.env;
ALCHEMY_API_KEY = "svZS1-kIgLsbjh3LqpusBujtoEWI3hDI";
module.exports = {
solidity: "0.8.19",
networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x{76c810a5a82999faaf455f8fa2cded1b9946874cc14b73641472f59734912f8a}`],
    },
},
};