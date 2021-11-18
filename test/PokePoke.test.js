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

    it("emits event properly upon poke", async () => {
        const tx = await instance.poke(accounts[1], { from: accounts[0] });
        assert.equal(tx.logs[0].event, 'PokeEvent', "A PokeEvent should be emitted.");
    });

    it("triggers error when self-poke attempted", async () => {
        try {
          await instance.poke(accounts[0], { from: accounts[0] });
          throw null;
        } 
        catch(error) {
            assert(error, "Expected an error but did not receive one.");
        }
        
    })
});