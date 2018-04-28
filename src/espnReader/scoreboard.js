const fetch = require('node-fetch');

const request = async (url, options) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const getBoxScore = async (leagueId, teamId, scoringPeriodId, env) => {
    if (env === 'dev'){
        // let data = await require('../tests/scoreboard_luke_wk15.json');
        // return data;
    } else {
        let url = 'http://games.espn.com/ffl/api/v2/boxscore?leagueId=' + leagueId + '&teamId=' + teamId + '&scoringPeriodId=' + scoringPeriodId + '&seasonId=2017';
        const res = await request(url);
        return res;
    }
}

const getLineups = async (leagueId, teamId, scoringPeriodId, env) => {
  const lineups = await getBoxScore(leagueId, teamId, scoringPeriodId, env);
  return lineups.boxscore.teams;
}

const getSingleTeamLineup = async (leagueId, teamId, scoringPeriodId, env) => {
  const lineups = await getLineups(leagueId, teamId, scoringPeriodId, env);
  const single = await lineups.filter(lineup => lineup.teamId === teamId);
  return single;
}


const getSimpleActiveRoster = async(leagueId, teamId, week, env) => {
    if (leagueId && teamId && week) {
        let weekRoster = await getSingleTeamLineup(leagueId, teamId, week, env);   
        if (weekRoster.length > 0) {
            const simpleRoster = {
                "team": weekRoster[0].team.teamLocation + " " + weekRoster[0].team.teamNickname,
                "points": weekRoster[0].appliedActiveRealTotal,
                "roster": weekRoster[0].slots.map(playerObj => {
                    return {
                        "name": playerObj.player.firstName + " " + playerObj.player.lastName,
                        "position": playerObj.player.defaultPositionId,
                        "activePosition": playerObj.slotCategoryId,
                        "points": playerObj.currentPeriodRealStats.appliedStatTotal
                    };
                }).filter(player => (player.activePosition < 20 ) || (player.activePosition === 23)),
                // TODO: add "bench": total bench points
            };
            return simpleRoster;
        } else {
            return "No team data returned";
        }
    } else {
        throw new Error("Not enough params given to make request")
    }
};

export default getSimpleActiveRoster;
