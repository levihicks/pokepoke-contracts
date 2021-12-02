// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title A framework for decentralized poking
 * @author Levi Hicks
 */
contract PokePoke {
    event PokeEvent (
        uint timestamp,
        address indexed to,
        address indexed from
    );

    /// Self-poking not allowed.
    error SelfPokeAttempted();
    
    /// @notice Pokes an account
    /// @param _pokeRecipient The recipient of the poke
    function poke(address _pokeRecipient) public {
        if (msg.sender == _pokeRecipient)
          revert SelfPokeAttempted();
        emit PokeEvent(block.timestamp, _pokeRecipient, msg.sender);
    }
}