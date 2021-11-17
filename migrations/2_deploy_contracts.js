var PokePoke = artifacts.require("PokePoke");

module.exports = function(deployer) {
  deployer.deploy(PokePoke);
};