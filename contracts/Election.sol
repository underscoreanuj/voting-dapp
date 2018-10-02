pragma solidity ^0.4.2;

contract Election {

    string public candidate;

    //constructor   (store candidate & read candidate)
    function Election () public {
        candidate = "Candidate 1";
    }

}