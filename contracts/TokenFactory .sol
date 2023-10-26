// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TokenFactory {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => address) private _tokenAddresses;

    event TokenCreated(
        uint256 indexed tokenId,
        address indexed tokenAddress
    );

    function createToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) public returns (address) {
        _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
        ERC20Mintable token = new ERC20Mintable(name, symbol);
        token.mint(msg.sender, initialSupply);

        _tokenAddresses[tokenId] = address(token);

        emit TokenCreated(tokenId, address(token));

        return address(token);
    }

    function getTokenAddress(uint256 tokenId)
        public
        view
        returns (address)
    {
        require(
            _tokenAddresses[tokenId] != address(0),
            "TokenFactory: Token not found"
        );

        return _tokenAddresses[tokenId];
    }
}
