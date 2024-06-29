const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EstatePool", function () {
  let EstatePool;
  let estatePool;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    EstatePool = await ethers.getContractFactory("EstatePool");
    estatePool = await EstatePool.deploy("https://myapp.com/{id}");

    await estatePool.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right URI", async function () {
      expect(await estatePool.uri(0)).to.equal("https://myapp.com/{id}");
    });
  });

  describe("CreateAsset", function () {
    it("Should create a new asset", async function () {
      await estatePool.CreateAsset(1, "Test Asset", 100, 50, 0);
      const listedTokens = await estatePool.GetListedTokens();
      expect(listedTokens.length).to.equal(1);
      expect(listedTokens[0].Name).to.equal("Test Asset");
      expect(listedTokens[0].Id).to.equal(1);
      expect(listedTokens[0].TotalPlots).to.equal(100);
      expect(listedTokens[0].AmountToBeSold).to.equal(50);
    });
  });

  describe("BuyPlot", function () {
    beforeEach(async function () {
      await estatePool.CreateAsset(1, "Test Asset", 100, 50, 0);
    });

    it("Should allow buying a plot", async function () {
      const purchaseAmount = 10;
      const price = ethers.parseEther("1"); // 1 ETH
      await estatePool.connect(addr1).BuyPlot(1, purchaseAmount, price, { value: price });

      const userTokens = await estatePool.GetUserTokensData(addr1.address);
      expect(userTokens.length).to.equal(1);
      expect(userTokens[0].amountOwned).to.equal(purchaseAmount);
    });

  });

  describe("AuctionAsset", function () {
    beforeEach(async function () {
      await estatePool.CreateAsset(1, "Test Asset", 100, 50, 0);
    });

    it("Should create an auction", async function () {
      await estatePool.AuctionAsset(1, 20, 1);
      const auction = await estatePool.auction(1);
      expect(auction.TokenId).to.equal(1);
      expect(auction.AmountToSell).to.equal(20);
      expect(auction.Owner).to.equal(owner.address);
    });
  });

  describe("PayBid", function () {
    beforeEach(async function () {
      await estatePool.CreateAsset(1, "Test Asset", 100, 50, 0);
     var a = await estatePool.AuctionAsset(1, 20, 1);
    });
    it("Should fail if not enough ETH is sent", async function () {
      const bidAmount = ethers.parseEther("1"); // 1 ETH
      await expect(
        estatePool.connect(addr1).PayBid(bidAmount, 1, { value: ethers.parseEther("0.5") }),
      ).to.be.revertedWith("Invalid Amount");
    });
  });

  describe("Getter functions", function () {
    beforeEach(async function () {
      await estatePool.CreateAsset(1, "Test Asset", 100, 50, 0);
    });

    it("Should return listed tokens", async function () {
      const listedTokens = await estatePool.GetListedTokens();
      expect(listedTokens.length).to.equal(1);
    });

    it("Should return available token amount", async function () {
      const availableAmount = await estatePool.GetAvailableTokenAmount(1);
      expect(availableAmount).to.equal(50);
    });
  });
});
