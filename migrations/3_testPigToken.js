const Migrations = artifacts.require("Migrations");

const PigToken = artifacts.require("PigToken");
const chalk = require('chalk');
const { assert } = require('chai');


// Make sure Ganache is running beforehand
module.exports = async function(deployer, network, accounts) {
	// Deploy Contracts P2
	console.log(chalk.red('====== Deploy Contracts P2 ======='));

    const instancePigToken = await PigToken.deployed()
    console.log("instancePigToken: ",instancePigToken.address);

    const name = await instancePigToken.name();
    console.log(chalk.blue("ER: name: ",name.toString()));

    const symbol = await instancePigToken.symbol();
    console.log(chalk.blue("ER: symbol: ",symbol.toString()));

    console.log(chalk.red.bold("ASSERT Initialize"));
    assert.equal(1,1,"ASSERTION FAILED");
}
