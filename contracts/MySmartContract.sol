//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
contract MySmartContract is Ownable {
    uint public myStateVariable;
    function get() public view returns (uint) {
        return myStateVariable;
    }
    function set(uint _newValue) public onlyOwner {
        myStateVariable = _newValue;
    }
}