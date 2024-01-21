const path = require("path");
const Voting = artifacts.require(
  path.resolve(__dirname, "contracts", "Voting.sol")
); // Adjust the path based on your project structure

module.exports = function (deployer) {
  deployer.deploy(Voting);
};
