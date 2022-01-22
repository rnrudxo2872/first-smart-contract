const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(`계약서를 배포하는 계정: ${deployer.address}`);
    console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

    //컴파일된 계약서를 ether.js로 가져옴.
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();

    console.log(`Contract deployed to address: ${nft.address}`);
}

main()
.then(() => process.exit(0))
.catch((err) => {
    console.error(err);
    process.exit(1);
})