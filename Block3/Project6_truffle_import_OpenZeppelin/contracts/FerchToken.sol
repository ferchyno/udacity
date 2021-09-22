// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.24;
pragma solidity ^0.8.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract FerchToken is ERC20 {

    // constructor() public {
    //     _totalSupply = INITIAL_SUPPLY;
    //     _balances[msg.sender] = INITIAL_SUPPLY;
    // }

    constructor(
            string memory _name,
            string memory _symbol,
            uint _initialSupply
    ) ERC20(_name, _symbol)
    {
        require(_initialSupply > 0, "INITIAL_SUPPLY has to be greater than 0");
        // _mint(msg.sender, _initialSupply);
        _totalSupply = _initialSupply;
        _balances[msg.sender] = _initialSupply; // Prueba git add
    }
}