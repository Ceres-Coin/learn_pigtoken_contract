const Dina = artifacts.require("Dina");

module.exports = async function(deployer, network, accounts) {
    const contract_owner = accounts[0];
    const devReceive = accounts[1];

    console.log("contract_owner",contract_owner);
    console.log("devReceive",devReceive);

    // deployer.deploy(Dina,devReceive); //deploy DINA

}
