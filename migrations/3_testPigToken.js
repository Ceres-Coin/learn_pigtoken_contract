const Migrations = artifacts.require("Migrations");
const BigNumber = require('bignumber.js');

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
    assert.equal(ar_name,er_name);
    console.log(chalk.blue("er_name : ",er_name.toString()));
    console.log(chalk.yellow("ar_name : ",ar_name.toString()));

    
    // Test Scripts for symbol() func
    const er_symbol = "PIG";
    const ar_symbol = (await instancePigToken.symbol()).toString();
    assert.equal(ar_symbol,er_symbol);
    console.log(chalk.blue("er_symbol : ",er_symbol.toString()));
    console.log(chalk.yellow("ar_symbol : ",ar_symbol.toString()));


    // Test Scripts for decimals() func
    const er_decimals = 9;
    const ar_decimals = await instancePigToken.decimals()
    assert.equal(ar_decimals,er_decimals);
    console.log(chalk.blue("er_decimals : ",er_decimals.toString()));
    console.log(chalk.yellow("ar_decimals : ",ar_decimals.toString()));

    // Test Scripts for totalSupply() func
    const er_totalSupply = (new BigNumber(1000000000 * 10**6 * 10**9)).toNumber();
    const ar_totalSupply = await instancePigToken.totalSupply();
    assert.equal(ar_totalSupply,er_totalSupply);
    console.log(chalk.blue("er_totalSupply : ",er_totalSupply.toString()));
    console.log(chalk.yellow("ar_totalSupply : ",ar_totalSupply.toString()));
}
