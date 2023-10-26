// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TokenContract is ERC20, ERC20Mintable, ERC20Burnable {
    constructor(string memory name, string memory symbol)
        ERC20(name, symbol)
    {}
}

