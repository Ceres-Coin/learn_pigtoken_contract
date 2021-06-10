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

    console.log(chalk.red.bold("ASSERT Initialize"));
    assert.equal(1,1,"ASSERTION FAILED");

    // Test Scripts for name() func
    const er_name = "Pig Token";
    const ar_name = (await instancePigToken.name()).toString();
    assert.equal(er_name,ar_name);
    console.log(chalk.blue("er_name : ",er_name.toString()));
    console.log(chalk.yellow("ar_name : ",ar_name.toString()));

    

    const symbol = await instancePigToken.symbol();
    console.log(chalk.blue("ER: symbol: ",symbol.toString()));


}
