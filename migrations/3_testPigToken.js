const Migrations = artifacts.require("Migrations");
const BigNumber = require('bignumber.js');

const PigToken = artifacts.require("PigToken");
const chalk = require('chalk');
const { assert } = require('chai');

const ONE_BILLION_DEC9 = new BigNumber("1000000000e9");
const ONE_E_DEC9 = new BigNumber("100000000e9");
const BIG6 = new BigNumber("1e6")
const BIG9 = new BigNumber("1e9")
const BIG18 = new BigNumber("1e18")


// Make sure Ganache is running beforehand
module.exports = async function(deployer, network, accounts) {

    const account0 = accounts[0];
    const account1 = accounts[1];
    console.log(chalk.red.bold("============= account0 ",account0," ================"));
    console.log(chalk.red.bold("============= account1 ",account1," ================"));

	
    const instancePigToken = await PigToken.deployed()
    console.log("instancePigToken: ",instancePigToken.address);

    console.log(chalk.red.bold("ASSERT Initialize"));
    assert.equal(1,1,"ASSERTION FAILED");

    // Test Scripts for name() func
    console.log(chalk.green.bold("============= Test Case for name ================"));
    const er_name = "Pig Token";
    const ar_name = (await instancePigToken.name()).toString();
    assert.equal(ar_name,er_name);
    console.log(chalk.blue("er_name : ",er_name.toString()));
    console.log(chalk.yellow("ar_name : ",ar_name.toString()));

    
    // Test Scripts for symbol() func
    console.log(chalk.green.bold("============= Test Case for symbol ================"));
    const er_symbol = "PIG";
    const ar_symbol = (await instancePigToken.symbol()).toString();
    assert.equal(ar_symbol,er_symbol);
    console.log(chalk.blue("er_symbol : ",er_symbol.toString()));
    console.log(chalk.yellow("ar_symbol : ",ar_symbol.toString()));


    // Test Scripts for decimals() func
    console.log(chalk.green.bold("============= Test Case for decimals ================"));
    const er_decimals = 9;
    const ar_decimals = await instancePigToken.decimals()
    assert.equal(ar_decimals,er_decimals);
    console.log(chalk.blue("er_decimals : ",er_decimals.toString()));
    console.log(chalk.yellow("ar_decimals : ",ar_decimals.toString()));

    // Test Scripts for totalSupply() func
    console.log(chalk.green.bold("============= Test Case for totalSupply ================"));
    const er_totalSupply = (new BigNumber(1000000000 * 10**6 * 10**9)).toNumber();
    const ar_totalSupply = await instancePigToken.totalSupply();
    assert.equal(ar_totalSupply,er_totalSupply);
    console.log(chalk.blue("er_totalSupply : ",er_totalSupply.toString()));
    console.log(chalk.yellow("ar_totalSupply : ",ar_totalSupply.toString()));

    // Test Scripts for balanceOf() func
    console.log(chalk.green.bold("============= Test Case for balanceOf ================"));
    const er_balanceOf_account0 = (new BigNumber(1000000000000000000000000)).toNumber();
    const er_balanceOf_account1 = (new BigNumber(0)).toNumber();
    const ar_balanceOf_account0 = await instancePigToken.balanceOf(account0);
    const ar_balanceOf_account1 = await instancePigToken.balanceOf(account1);
    assert.equal(ar_balanceOf_account0,er_balanceOf_account0);
    assert.equal(ar_balanceOf_account1,er_balanceOf_account1);
    console.log(chalk.blue("er_balanceOf_account0 : ",er_balanceOf_account0.toString()));
    console.log(chalk.blue("er_balanceOf_account1 : ",er_balanceOf_account1.toString()));
    console.log(chalk.yellow("ar_balanceOf_account0 : ",ar_balanceOf_account0.toString()));
    console.log(chalk.yellow("ar_balanceOf_account1 : ",ar_balanceOf_account1.toString()));

    // Test Scripts for totalFees() func
    console.log(chalk.green.bold("============= Test Case for totalFees ================"));
    const er_totalFees = (new BigNumber(0)).toNumber();
    const ar_totalFees = await instancePigToken.totalFees();
    assert.equal(ar_totalFees,er_totalFees);
    console.log(chalk.blue("er_totalFees : ",er_totalFees.toString()));
    console.log(chalk.yellow("ar_totalFees : ",ar_totalFees.toString()));

    // Test Scripts for isExcludedFromReward() func
    console.log(chalk.green.bold("============= Test Case for isExcludedFromReward ================"));
    const er_isExcludedFromReward_account0 = false;
    const er_isExcludedFromReward_account1 = false;
    const ar_isExcludedFromReward_account0 = await instancePigToken.isExcludedFromReward(account0);
    const ar_isExcludedFromReward_account1 = await instancePigToken.isExcludedFromReward(account1);
    assert.equal(ar_isExcludedFromReward_account0,er_isExcludedFromReward_account0);
    assert.equal(ar_isExcludedFromReward_account1,er_isExcludedFromReward_account1);
    console.log(chalk.blue("er_isExcludedFromReward_account0 : ",er_isExcludedFromReward_account0.toString()));
    console.log(chalk.blue("er_isExcludedFromReward_account1 : ",er_isExcludedFromReward_account1.toString()));
    console.log(chalk.yellow("ar_isExcludedFromReward_account0 : ",ar_isExcludedFromReward_account0.toString()));
    console.log(chalk.yellow("ar_isExcludedFromReward_account1 : ",ar_isExcludedFromReward_account1.toString()));

    // Test Scripts for transfer() func
    console.log(chalk.green.bold("============= Test Case for transfer ================"));
    const ar_balanceOf_account0_before = (await instancePigToken.balanceOf(account0)).div(BIG9);
    const ar_balanceOf_account1_before = await instancePigToken.balanceOf(account1).div(BIG9);
    await instancePigToken.transfer(account1,ONE_E_DEC9);
    const ar_balanceOf_account0_after = await instancePigToken.balanceOf(account0).div(BIG9);
    const ar_balanceOf_account1_after = await instancePigToken.balanceOf(account1).div(BIG9);

    console.log(chalk.yellow("ar_balanceOf_account0_before ",ar_balanceOf_account0_before.toString()));
    console.log(chalk.yellow("ar_balanceOf_account1_before ",ar_balanceOf_account1_before.toString()));
    console.log(chalk.yellow("ar_balanceOf_account0_after ",ar_balanceOf_account0_after.toString()));
    console.log(chalk.yellow("ar_balanceOf_account1_after ",ar_balanceOf_account1_after.toString()));
}
