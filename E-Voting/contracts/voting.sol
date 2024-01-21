pragma solidity >=0.4.22 <0.7.0;

contract Voting {
    uint public votingEventCount = 0;
    uint public partyCount = 0;

    struct VotingEvent {
        uint id;
        string title;
        string description;
        string imgUrl;
        uint numOfVotes;
        mapping(uint => Party) parties; // Mapping from party index to Party struct
        uint partyCount; // Counter for the number of parties in this event
    }

    struct Party {
        uint id;
        string name;
        string description;
        string imgUrl;
        uint numOfVotes;
    }

    mapping(uint => VotingEvent) public votingEvents;
    mapping(uint => Party) public parties;

    function addVotingEvent(string memory _title, string memory _description, string memory _imgUrl) public {
        votingEventCount++;
        votingEvents[votingEventCount] = VotingEvent(votingEventCount, _title, _description, _imgUrl, 0, 0);
    }

    function addPartyToEvent(uint _eventId, string memory _name, string memory _description, string memory _imgUrl) public {
        require(_eventId > 0 && _eventId <= votingEventCount, "Invalid event ID");

        VotingEvent storage currentEvent = votingEvents[_eventId];
        uint partyIndex = currentEvent.partyCount + 1; // Increment party count for the new party
        partyCount++;

        currentEvent.parties[partyIndex] = Party(partyIndex, _name, _description, _imgUrl, 0);
        currentEvent.partyCount++;
    }

    function voteForParty(uint _eventId, uint _partyIndex) public {
        require(_eventId > 0 && _eventId <= votingEventCount, "Invalid event ID");
        require(_partyIndex > 0 && _partyIndex <= votingEvents[_eventId].partyCount, "Invalid party index");

        VotingEvent storage currentEvent = votingEvents[_eventId];
        Party storage votedParty = currentEvent.parties[_partyIndex];
        
        votedParty.numOfVotes++;
        currentEvent.numOfVotes++;
    }
}
