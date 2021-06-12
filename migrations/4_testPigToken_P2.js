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
    console.log(chalk.blue("============= account0 ",account0," ================"));
    console.log(chalk.blue("============= account1 ",account1," ================"));
    console.log(chalk.blue("============= account2 ",account2," ================"));

    const instancePigToken = await PigToken.deployed()
    console.log("instancePigToken: ",instancePigToken.address);

    console.log(chalk.green.bold("ASSERT Initialize PASS"));
    assert.equal(1,1,"ASSERTION FAIL");

    // Preparequisites
    console.log(chalk.green.bold("===================  4_testPigToken_P2 Prepare Period==================="));
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

        // Test Scripts for totalSupply() func
        console.log(chalk.green.bold("============= Test Case for totalSupply ================"));
        const er_totalSupply = (new BigNumber(1000000000 * 10**6 * 10**9)).div(BIG9).toNumber();
        const ar_totalSupply = (new BigNumber(await instancePigToken.totalSupply())).div(BIG9).toNumber();
        assert.equal(ar_totalSupply,er_totalSupply);
        console.log(chalk.blue("er_totalSupply : ",er_totalSupply.toString()));
        console.log(chalk.yellow("ar_totalSupply : ",ar_totalSupply.toString()));



        // Test Scripts for setLiquidityFeePercent parameter
        console.log(chalk.green.bold("============= Test Case for setLiquidityFeePercent() ================"));
        // Before
        const er_setLiquidityFeePercent_after = 5;
        const ar_setLiquidityFeePercent_before = await instancePigToken._liquidityFee.call();
        // Action
        await instancePigToken.setLiquidityFeePercent(5,{from: CONTRACT_OWNER});
        const ar_setLiquidityFeePercent_after = await instancePigToken._liquidityFee.call(); 
        // Assert
        assert.equal(ar_setLiquidityFeePercent_after,er_setLiquidityFeePercent_after);
        // Print
        console.log(chalk.yellow("ar_setLiquidityFeePercent_before : ",ar_setLiquidityFeePercent_before.toString()));
        console.log(chalk.yellow("ar_setLiquidityFeePercent_after : ",ar_setLiquidityFeePercent_after.toString()));
        // Test For New _liquidityFee for transferring
        await instancePigToken.transfer(account3,ONE_MILLION_DEC9,{ from: account1 });
        const ar_balanceOf_account1_after3 = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);
        const ar_balanceOf_account3_after3 = (new BigNumber(await instancePigToken.balanceOf(account3))).div(BIG9);
        console.log(chalk.yellow("ar_balanceOf_account1_after3 ",ar_balanceOf_account1_after3.toString()));
        console.log(chalk.yellow("ar_balanceOf_account3_after3 ",ar_balanceOf_account3_after3.toString()));
        // Roll Back        
        await instancePigToken.setLiquidityFeePercent(3,{from: CONTRACT_OWNER});
        const ar_setLiquidityFeePercent_after2 = await instancePigToken._liquidityFee.call(); 
        console.log("ar_setLiquidityFeePercent_after2: ",ar_setLiquidityFeePercent_after2.toString());

        // Test For New _liquidityFee for transferring AFTER roll back to _liquidityFee = 2
        await instancePigToken.transfer(account4,ONE_MILLION_DEC9,{ from: account1 });
        const ar_balanceOf_account1_after4 = (new BigNumber(await instancePigToken.balanceOf(account1))).div(BIG9);
        const ar_balanceOf_account4_after4 = (new BigNumber(await instancePigToken.balanceOf(account4))).div(BIG9);
        console.log(chalk.yellow("ar_balanceOf_account1_after4 ",ar_balanceOf_account1_after4.toString()));
        console.log(chalk.yellow("ar_balanceOf_account4_after4 ",ar_balanceOf_account4_after4.toString()));


        // Test Scripts for _maxTxAmount() func
        console.log(chalk.green.bold("============= Test Case for _maxTxAmount ================"));
        const er__maxTxAmount = (new BigNumber(5000000 * 10**6 * 10**9)).div(BIG9).toNumber();
        const ar__maxTxAmount = (new BigNumber(await instancePigToken._maxTxAmount())).div(BIG9).toNumber();
        assert.equal(ar__maxTxAmount,er__maxTxAmount);
        console.log(chalk.blue("er__maxTxAmount : ",er__maxTxAmount.toString()));
        console.log(chalk.yellow("ar__maxTxAmount : ",ar__maxTxAmount.toString()));

        // COMMENT BELOW CODE

        // // Test Scripts for setMaxTxPercent() func
        // console.log(chalk.green.bold("============= Test Case for setMaxTxPercent ================"));
        // await instancePigToken.setMaxTxPercent(10);
        // // const er_setMaxTxPercent = (new BigNumber(5000000 * 10**6 * 10**9)).div(BIG9).toNumber();
        // const ar_setMaxTxPercent_after = (new BigNumber(await instancePigToken._maxTxAmount())).div(BIG9).toNumber();
        // // assert.equal(ar_setMaxTxPercent,er_setMaxTxPercent);
        // // console.log(chalk.blue("er_setMaxTxPercent : ",er_setMaxTxPercent.toString()));
        // console.log(chalk.yellow("ar_setMaxTxPercent_after : ",ar_setMaxTxPercent_after.toString()));

        // Test Scripts for swapAndLiquifyEnabled() func
        console.log(chalk.green.bold("============= Test Case for swapAndLiquifyEnabled ================"));
        const er_swapAndLiquifyEnabled = true
        const ar_swapAndLiquifyEnabled = await instancePigToken.swapAndLiquifyEnabled();
        assert.equal(ar_swapAndLiquifyEnabled,er_swapAndLiquifyEnabled);
        console.log(chalk.blue("er_swapAndLiquifyEnabled : ",er_swapAndLiquifyEnabled.toString()));
        console.log(chalk.yellow("ar_swapAndLiquifyEnabled : ",ar_swapAndLiquifyEnabled.toString()));

        // Test Scripts for setSwapAndLiquifyEnabled() func
        console.log(chalk.green.bold("============= Test Case for setSwapAndLiquifyEnabled ================"));
        const er_swapAndLiquifyEnabled_after = false
        // Action
        await instancePigToken.setSwapAndLiquifyEnabled(false);
        // Assertion
        const ar_swapAndLiquifyEnabled_after = await instancePigToken.swapAndLiquifyEnabled();
        assert.equal(ar_swapAndLiquifyEnabled_after,er_swapAndLiquifyEnabled_after);
        // Print
        console.log(chalk.blue("er_swapAndLiquifyEnabled_after : ",er_swapAndLiquifyEnabled_after.toString()));
        console.log(chalk.yellow("ar_swapAndLiquifyEnabled_after : ",ar_swapAndLiquifyEnabled_after.toString()));
        // Rollback
        console.log(chalk.blue("roll back"))
        await instancePigToken.setSwapAndLiquifyEnabled(true);
        console.log(chalk.blue("swapAndLiquifyEnabled: ",(await instancePigToken.swapAndLiquifyEnabled()).toString()));




}
