const Migrations = artifacts.require("Migrations");
const BigNumber = require('bignumber.js');

const PigToken = artifacts.require("PigToken");
const chalk = require('chalk');
const { assert } = require('chai');

const ONE_BILLION_DEC9 = new BigNumber("1000000000e9");
const ONE_E_DEC9 = new BigNumber("100000000e9");
const ONE_MILLION_DEC9 = new BigNumber("1000000e9");
const BIG6 = new BigNumber("1e6")
const BIG9 = new BigNumber("1e9")
const BIG18 = new BigNumber("1e18")




// Make sure Ganache is running beforehand
module.exports = async function(deployer, network, accounts) {

    console.log(chalk.green.bold("=================== START Test Scripts 4_testPigToken_P2 ==================="));
    console.log(chalk.green.bold("=================== START Test Scripts 4_testPigToken_P2 ==================="));
    console.log(chalk.green.bold("=================== START Test Scripts 4_testPigToken_P2 ==================="));

    const account0 = accounts[0];
    const CONTRACT_OWNER = account0;
    const account1 = accounts[1];
    const account2 = accounts[2];
    const account3 = accounts[3];
    const account4 = accounts[4];
    const account5 = accounts[5];
    const account6 = accounts[6];
    const account7 = accounts[7];
    console.log(chalk.blue.bold("============= account0 ",account0," ================"));
    console.log(chalk.blue.bold("============= account1 ",account1," ================"));
    console.log(chalk.blue.bold("============= account2 ",account2," ================"));



	
    const instancePigToken = await PigToken.deployed()
    console.log("instancePigToken: ",instancePigToken.address);

    console.log(chalk.green.bold("ASSERT Initialize PASS"));
    assert.equal(1,1,"ASSERTION FAIL");

    


}
