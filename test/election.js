// truffle comes bundled with Mocha & Chai Assertion Library
// both of which are usefull in writing tests for our smart contracts

// require the smart contract
var Election = artifacts.require("./Election.sol")

//declare our contract
contract("Election", function(accounts) {

    var electionInstance;

    it("initializes with two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("initializes the candidates with the correct values", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains correct id");
            assert.equal(candidate[1], "Candidate 1", "contains correct name");
            assert.equal(candidate[2], 0, "contains correct initial vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "contains correct id");
            assert.equal(candidate[1], "Candidate 2", "contains correct name");
            assert.equal(candidate[2], 0, "contains correct initial vote count");
        });
    });

});