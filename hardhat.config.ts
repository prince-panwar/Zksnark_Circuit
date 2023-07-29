import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
// https://github.com/projectsophon/hardhat-circom
import "hardhat-circom";
// circuits
import circuits = require('./circuits.config.json')

// set env var to the root of the project
process.env.BASE_PATH = __dirname;

// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: ["b28cdbbc81d46f0b68b2d56bbb6720f4d0a40dd2577f077b9b11a7ff9b1defef"],
    }
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
