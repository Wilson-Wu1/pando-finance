const NFTCollection = artifacts.require("NFTCollection");
const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function (deployer) {
  await deployer.deploy(NFTCollection);
  const deployedNFT =  await NFTCollection.deployed();

  const NFTAddress = deployedNFT.address;
  await deployer.deploy(NFTMarketplace, NFTAddress);
};

const Token = artifacts.require("MinimalERC721");

module.exports = function (deployer) {
  deployer.deploy(Token);
};


module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
