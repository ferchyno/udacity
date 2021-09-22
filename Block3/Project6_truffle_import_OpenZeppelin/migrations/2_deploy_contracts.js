const FerchToken = artifacts.require("FerchToken");

module.exports = function (deployer) {
  deployer.deploy(FerchToken,  "FerchCoins", "FRC", "10000");
};
