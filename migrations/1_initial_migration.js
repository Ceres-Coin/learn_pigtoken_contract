const Migrations = artifacts.require("Migrations");

// const PigToken = artifacts.require("PigToken");
const CeresDemo = artifacts.require("CeresDemo");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(PigToken); //deploy PigToken
  deployer.deploy(CeresDemo); //deploy PigToken
};
