// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Calculator is Ownable {
    using SafeMath for uint256;

    uint256 private result;

    function add(uint256 a, uint256 b) public onlyOwner {
        result = a.add(b);
    }

    function sub(uint256 a, uint256 b) public onlyOwner {
        result = a.sub(b);
    }

    function mul(uint256 a, uint256 b) public onlyOwner {
        result = a.mul(b);
    }

    function div(uint256 a, uint256 b) public onlyOwner {
        require(b != 0, "Division by zero");
        result = a.div(b);
    }

    function getResult() public view returns (uint256) {
        return result;
    }
}