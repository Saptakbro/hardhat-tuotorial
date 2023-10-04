pragma solidity => 0.5.0 < 0.8.0;

contact Token {
    string public name="Hardhat Token";
    string public symbol="HHT";
    uint public tokenSupply= 10000;

    address public owner;

    mapping(address=>uint) balance;

    constructor() {
        balances[msg.sender]=totalsupply;
        owner=msg.sender;
    }
function transfer(address to, uint amount )
    
}
