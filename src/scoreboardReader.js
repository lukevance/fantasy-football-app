const espnFF = require('espn-ff-api');

const getSimpleActiveRoster = async(leagueId, teamId, week) => {
    console.log('did this thing start?!?!');
    const cookies = {
        espnS2: 'AECZnS136NJQz9%2FLZyyU5okpmFG3cdja%2B7o33mrHjqILi%2Ff%2FuvKdNtPLe5O71MHMsDc63wLoU6foK7QYZI%2BVeMNGtB1XXrHHeJPUoVSp%2FhH2L%2BLJX3mOyM9vBdeHvF6MEQLWBmp6GkAgKtls8s05XS0LfpQHxsFo6jgqc1jRXolCogWHgwtIvWqFdAjRDpZq9sT4HqQN9bBIHt673mOqpaL7WudidAfbI5FIsGN9DARUcGMDjcwzsKwJcsiDMJmMzJrJYRyXOxPuhWwkSHAFPmsg',
        SWID: '{A98E24CD-3438-4EF3-BD20-4F6682B70FD1}'
    };

    let weekRoster = await espnFF.getSingleTeamLineup(cookies, leagueId, teamId, week);
    console.log('did we get here?');
    const simpleRoster = {
        "team": weekRoster[0].teamName,
        "points": weekRoster[0].realPoints,
        "roster": weekRoster[0].players.map(playerObj => {
            return {
                "name": playerObj.player.firstName + " " + playerObj.player.lastName,
                "position": playerObj.player.defaultPositionId,
                "activePosition": playerObj.slotCategoryId,
                "points": playerObj.currentPeriodRealStats.appliedStatTotal
            };
        }).filter(player => player.activePosition < 20),
        // TODO: add "bench": total bench points
    };
    // console.log(simpleRoster);
    return simpleRoster;
};

// getSimpleActiveRoster('286565', '7', '15');

export default getSimpleActiveRoster;
// module.exports = getSimpleActiveRoster;