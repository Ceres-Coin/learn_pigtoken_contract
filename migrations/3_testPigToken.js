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

    console.log(chalk.green.bold("=================== START Test Scripts 3_testPigToken ==================="));
    console.log(chalk.green.bold("=================== START Test Scripts 3_testPigToken ==================="));
    console.log(chalk.green.bold("=================== START Test Scripts 3_testPigToken ==================="));
    const account0 = accounts[0];
    const CONTRACT_OWNER = account0;
    const account1 = accounts[1];
    const account2 = accounts[2];
    const account3 = accounts[3];
    const account4 = accounts[4];
    const account5 = accounts[5];
    const account6 = accounts[6];
    const account7 = accounts[7];
    console.log(chalk.blue("============= account0 ",account0," ================"));
    console.log(chalk.blue("============= account1 ",account1," ================"));
    console.log(chalk.blue("============= account2 ",account2," ================"));



	
    const instancePigToken = await PigToken.deployed()
    console.log("instancePigToken: ",instancePigToken.address);

    
    assert.equal(1,1,"ASSERTION FAIL");

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
    const er_balanceOf_account1_after = ONE_E_DEC9.div(BIG9);
    const ar_balanceOf_account0_before = (new BigNumber(await instancePigToken.balanceOf(account0))).div(BIG9);
    const ar_balanceOf_account1_before = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);
    await instancePigToken.transfer(account1,ONE_E_DEC9);
    const ar_balanceOf_account0_after = (new BigNumber(await instancePigToken.balanceOf(account0))).div(BIG9);
    const ar_balanceOf_account1_after = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);

    assert.equal(er_balanceOf_account1_after.toString(),ar_balanceOf_account1_after.toString(),"ASSERTION FAILED");

    console.log(chalk.blue("er_balanceOf_account1_after: ",er_balanceOf_account1_after.toString()));
    console.log(chalk.yellow("ar_balanceOf_account0_before ",ar_balanceOf_account0_before.toString()));
    console.log(chalk.yellow("ar_balanceOf_account1_before ",ar_balanceOf_account1_before.toString()));
    console.log(chalk.yellow("ar_balanceOf_account0_after ",ar_balanceOf_account0_after.toString()));
    console.log(chalk.yellow("ar_balanceOf_account1_after ",ar_balanceOf_account1_after.toString()));

    await instancePigToken.transfer(account2,ONE_MILLION_DEC9,{ from: account1 });

    const ar_balanceOf_account1_after2 = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);
    const ar_balanceOf_account2_after2 = (new BigNumber(await instancePigToken.balanceOf(account2))).div(BIG9);

    console.log(chalk.yellow("ar_balanceOf_account1_after2 ",ar_balanceOf_account1_after2.toString()));
    console.log(chalk.yellow("ar_balanceOf_account2_after2 ",ar_balanceOf_account2_after2.toString()));

    // Test Scripts for _taxFee parameter
    console.log(chalk.green.bold("============= Test Case for _taxFee ================"));
    const er_taxFee = 2;
    const ar_taxFee = await instancePigToken._taxFee.call();
    assert.equal(ar_taxFee,er_taxFee);
    console.log(chalk.blue("er_taxFee : ",er_taxFee.toString()));
    console.log(chalk.yellow("ar_taxFee : ",ar_taxFee.toString()));

    // Test Scripts for setTaxFeePercent parameter
    console.log(chalk.green.bold("============= Test Case for setTaxFeePercent ================"));
    // Before
    const er_setTaxFeePercent_after = 5;
    const ar_setTaxFeePercent_before = await instancePigToken._taxFee.call();
    // Action
    await instancePigToken.setTaxFeePercent(5,{from: CONTRACT_OWNER});
    const ar_setTaxFeePercent_after = await instancePigToken._taxFee.call(); 
    // Assert
    assert.equal(ar_setTaxFeePercent_after,er_setTaxFeePercent_after);
    // Print
    console.log(chalk.yellow("ar_setTaxFeePercent_before : ",ar_setTaxFeePercent_before.toString()));
    console.log(chalk.yellow("ar_setTaxFeePercent_after : ",ar_setTaxFeePercent_after.toString()));
    // Test For New Tax for transferring
    await instancePigToken.transfer(account3,ONE_MILLION_DEC9,{ from: account1 });
    const ar_balanceOf_account1_after3 = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);
    const ar_balanceOf_account3_after3 = (new BigNumber(await instancePigToken.balanceOf(account3))).div(BIG9);
    console.log(chalk.yellow("ar_balanceOf_account1_after3 ",ar_balanceOf_account1_after3.toString()));
    console.log(chalk.yellow("ar_balanceOf_account3_after3 ",ar_balanceOf_account3_after3.toString()));
    // Roll Back        
    await instancePigToken.setTaxFeePercent(2,{from: CONTRACT_OWNER});
    const ar_setTaxFeePercent_after2 = await instancePigToken._taxFee.call(); 
    console.log("ar_setTaxFeePercent_after2: ",ar_setTaxFeePercent_after2.toString());

    // Test Scripts for excludeFromFee func
    console.log(chalk.green.bold("============= Test Case for excludeFromFee ================"));
    // Action
    await instancePigToken.excludeFromFee(account1,{from:CONTRACT_OWNER});
    let balanceOf_account1_after;
    let balanceOf_account4_after;
    // Test For transferring for excludeFromFee() func
    await instancePigToken.transfer(account4,ONE_MILLION_DEC9,{ from: account1 });
    balanceOf_account1_after = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);
    balanceOf_account4_after = (new BigNumber(await instancePigToken.balanceOf(account4))).div(BIG9);
    // Print
    console.log(chalk.yellow("balanceOf_account1_after ",balanceOf_account1_after.toString()));
    console.log(chalk.yellow("balanceOf_account4_after ",balanceOf_account4_after.toString()));


}
