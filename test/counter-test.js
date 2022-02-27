const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new counter value once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    expect(await counter.getCount()).to.equal(0);


    const setCountTx = await counter.count();

    // wait until the transaction is mined
    await setCountTx.wait();
    expect(await counter.getCount()).to.equal(1);
  });
});
