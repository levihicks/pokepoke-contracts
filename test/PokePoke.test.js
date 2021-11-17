const PokePoke = artifacts.require("PokePoke");

contract("PokePoke", (accounts) => {
    let instance;
    before(async () => {
        instance = await PokePoke.deployed();
    });

    it("can poke", async () => {
        await instance.poke(accounts[1], { from: accounts[0] });
        const recipientPokes = await instance.viewPokes(accounts[1]);
        assert.equal(recipientPokes[0].pokedBy, accounts[0], "The sender of the poke should be shown in the recipient's list of pokes.");
    });
});