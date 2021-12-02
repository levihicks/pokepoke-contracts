const PokePoke = artifacts.require("PokePoke");

contract("PokePoke", (accounts) => {
    let instance;
    before(async () => {
        instance = await PokePoke.deployed();
    });

    it("emits event properly upon poke", async () => {
        const tx = await instance.poke(accounts[1], { from: accounts[0] });
        assert.equal(tx.logs[0].event, 'PokeEvent', "A PokeEvent should be emitted.");
        assert.equal(tx.logs[0].args.to, accounts[1], "Proper address should be poked.");
        assert.equal(tx.logs[0].args.from, accounts[0], "Poke should be sent from proper address.");
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