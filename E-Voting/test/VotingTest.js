const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
  it("should add a voting event and a party to the event", async () => {
    const votingInstance = await Voting.deployed();

    // Add a voting event
    await votingInstance.addVotingEvent(
      "Event 1",
      "Description 1",
      "ImgUrl 1",
      { from: accounts[0] }
    );

    // Get the ID of the added event
    const eventId = (await votingInstance.votingEventCount()).toNumber();

    // Add a party to the event
    await votingInstance.addPartyToEvent(
      eventId,
      "Party 1",
      "Party Description 1",
      "Party ImgUrl 1",
      { from: accounts[0] }
    );

    // Get the ID of the added party
    const partyIndex = (await votingInstance.votingEvents(eventId)).partyCount;

    // Verify the event and party details
    const eventDetails = await votingInstance.votingEvents(eventId);
    assert.equal(eventDetails.title, "Event 1", "Incorrect event title");
    assert.equal(
      eventDetails.description,
      "Description 1",
      "Incorrect event description"
    );
    assert.equal(eventDetails.imgUrl, "ImgUrl 1", "Incorrect event imgUrl");

    const partyDetails = await votingInstance.parties(partyIndex);
    assert.equal(partyDetails.name, "Party 1", "Incorrect party name");
    assert.equal(
      partyDetails.description,
      "Party Description 1",
      "Incorrect party description"
    );
    assert.equal(
      partyDetails.imgUrl,
      "Party ImgUrl 1",
      "Incorrect party imgUrl"
    );
  });

  it("should vote for a party in a voting event", async () => {
    const votingInstance = await Voting.deployed();

    // Add a voting event
    await votingInstance.addVotingEvent(
      "Event 2",
      "Description 2",
      "ImgUrl 2",
      { from: accounts[0] }
    );

    // Get the ID of the added event
    const eventId = (await votingInstance.votingEventCount()).toNumber();

    // Add a party to the event
    await votingInstance.addPartyToEvent(
      eventId,
      "Party 2",
      "Party Description 2",
      "Party ImgUrl 2",
      { from: accounts[0] }
    );

    // Vote for the party
    await votingInstance.voteForParty(eventId, 1, { from: accounts[0] });

    // Verify the vote count for the party and the total votes in the event
    const partyDetails = await votingInstance.parties(1);
    assert.equal(
      partyDetails.numOfVotes,
      1,
      "Incorrect vote count for the party"
    );

    const eventDetails = await votingInstance.votingEvents(eventId);
    assert.equal(
      eventDetails.numOfVotes,
      1,
      "Incorrect total votes in the event"
    );
  });
});
