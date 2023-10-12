const {expect} = require("chai");

describe("Math", function () {
 let math;

 beforeEach(async () => {
    const Math = await ethers.getContractFactory("Math");
    math = await Math.deploy();
    await math.deployed();
 });

 describe("add", function () {
    it("should return the sum of two numbers", async function () {
      const result = await math.add(3, 4);
      expect(result).to.equal(7);
    });

    it("should handle zero", async function () {
      const result = await math.add(0, 0);
      expect(result).to.equal(0);
    });

    it("should handle negative numbers", async function () {
      const result = await math.add(-3, 4);
      expect(result).to.equal(1);
    });
 });

 describe("sub", function () {
    it("should return the difference of two numbers", async function () {
      const result = await math.sub(7, 4);
      expect(result).to.equal(3);
    });

    it("should handle zero", async function () {
      const result = await math.sub(0, 0);
      expect(result).to.equal(0);
    });

    it("should handle negative numbers", async function () {
      const result = await math.sub(4, -3);
      expect(result).to.equal(7);
    });
 });

 describe("mul", function () {
    it("should return the product of two numbers", async function () {
      const result = await math.mul(3, 4);
      expect(result).to.equal(12);
    });

    it("should handle zero", async function () {
      const result = await math.mul(0, 0);
      expect(result).to.equal(0);
    });

    it("should handle negative numbers", async function () {
      const result = await math.mul(-3, 4);
      expect(result).to.equal(-12);
    });
 });

 describe("div", function () {
    it("should return the quotient of two numbers", async function () {
      const result = await math.div(12, 4);
      expect(result).to.equal(3);
    });

    it("should handle zero", async function () {
      const result = await math.div(0, 0);
      expect(result).to.equal(0);
    });

    it("should handle negative numbers", async function () {
      const result = await math.div(-12, 4);
      expect(result).to.equal(-3);
    });

    it("should throw an error if dividing by zero", async function () {
      await expect(math.div(12, 0)).to.be.revertedWith("division by zero");
    });
 });
});