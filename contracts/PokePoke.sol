// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title A framework for decentralized poking
 * @author Levi Hicks
 */
contract PokePoke {
    struct Poke {
        uint timestamp; // block timestamp of the moment the poke occurred
        address pokedBy; // the sender of the poke
    }

    mapping(address => Poke[]) public pokes;
    
    /// @notice Pokes an account
    /// @param _pokeRecipient The recipient of the poke
    function poke(address _pokeRecipient) public {
        pokes[_pokeRecipient].push(Poke(block.timestamp, msg.sender));
    }
    
    /// @notice Returns array of pokes received for an address
    /// @param _addr The address to view pokes for
    /// @return The array of pokes received
    function viewPokes(address _addr) view public returns (Poke[] memory) {
        return pokes[_addr];
    }
}