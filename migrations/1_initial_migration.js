const Migrations = artifacts.require("Migrations");

const PigToken = artifacts.require("PigToken");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(PigToken); //deploy PigToken
};
