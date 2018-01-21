const fetch = require('node-fetch');

const request = async (url, options) => {
    const response = await fetch(url);
    const json = await response.json();
    //console.log(json);
    return json;
}

const getBoxScore = async (leagueId, teamId, scoringPeriodId) => {
  let url = 'http://games.espn.com/ffl/api/v2/boxscore?leagueId=' + leagueId + '&teamId=' + teamId + '&scoringPeriodId=' + scoringPeriodId + '&seasonId=2017';
  const res = await request(url);
//   console.log(res);
  return res;
}

const getLineups = async (leagueId, teamId, scoringPeriodId) => {
  const lineups = await getBoxScore(leagueId, teamId, scoringPeriodId);
//   console.log(lineups);
  return lineups.boxscore.teams;
}

const getSingleTeamLineup = async (leagueId, teamId, scoringPeriodId) => {
  const lineups = await getLineups(leagueId, teamId, scoringPeriodId);
  const single = await lineups.filter(lineup => lineup.teamId == teamId);
//   console.log(lineups);  
  return single;
}


const getSimpleActiveRoster = async(leagueId, teamId, week) => {
    let weekRoster = await getSingleTeamLineup(leagueId, teamId, week);
//    console.log(weekRoster);    
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
            }).filter(player => player.activePosition < 20),
            // TODO: add "bench": total bench points
        };
        // console.log(simpleRoster);
        return simpleRoster;
    } else {
        return "No team data returned";
    }

};

export default getSimpleActiveRoster;
