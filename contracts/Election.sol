pragma solidity ^0.4.2;

contract Election {
    // model of a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // store candidates
    // fetch candidate
    mapping(uint => Candidate) public candidates;   
    // a mapping in solidity is like an associative array (hash) key->uint(id) mapped with Candidate(name)

    // store candidate vote count
    uint public candidatesCount;
    /*
      any value not present within the mapping, when called for will return an empty candidate
      making it impossible to determine the size of the mapping
      hence we use candidatesCount
    */

    constructor () public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    //function to add a candidate to the mapping
    function addCandidate(string _name) private {
        /*
        solidity follows the convention of naming local variable with a preceding underscore "_"
        */
        ++candidatesCount;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

}