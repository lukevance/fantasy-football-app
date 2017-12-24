const espnFF = require('espn-ff-api');

const cookies = {
    espnS2: 'AEC2sSHBCne0Fhg2vh%2FOIr%2BKrXTT3BeM0wH4RN7dwSlTx4JOhuA67pheDVaevS58VI6opLwFKN0DJaemYx3T65d8l8irHx%2B1luWzYT1RIAowvjiujzaDIoxjkeSyKcB09m5DLQ6fEcqL8Y2y6Tbyy9vuahebVvPPrx2Fhqnzph5P2hCRDHNlH40nXC7w0eSH2j627wFTRGZyCddpcWkRLEHwP9TGSf9aMhNsL6d4Hjnk7%2F1%2B1A1XGaMUG3rSJwOi00aI3KwNwwi%2FGmgvAIjnmxfP',
    SWID: '{A98E24CD-3438-4EF3-BD20-4F6682B70FD1}'
};

const getLeagueStandings = async(leagueId) => {
    console.log(await espnFF.getLeagueStandings(cookies, leagueId));
    return;
};

const getActiveRoster = async(leagueId, teamId, week) => {
    let weekRoster = await espnFF.getSingleTeamLineup(cookies, leagueId, teamId, week);
    let simpleRoster = weekRoster[0].players.map(playerObj => {
        return {
            "name": playerObj.player.firstName + " " + playerObj.player.lastName,
            "position": playerObj.player.defaultPositionId,
            "activePosition": playerObj.slotCategoryId,
            "points": playerObj.currentPeriodRealStats.appliedStatTotal
        };
    });
    console.log(simpleRoster);
};

getActiveRoster('286565', '7', '15');