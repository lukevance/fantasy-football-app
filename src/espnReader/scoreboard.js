const fetch = require('node-fetch');

const request = async (url, options) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const getBoxScore = async (leagueId, teamId, scoringPeriodId, env) => {
    // if (env === 'dev'){
    //     const data = require('../tests/scoreboard_luke_wk15.json');
    //     return data;
    // } else {
        let url = 'http://games.espn.com/ffl/api/v2/boxscore?leagueId=' + leagueId + '&teamId=' + teamId + '&scoringPeriodId=' + scoringPeriodId + '&seasonId=2017';
        const res = await request(url);
        return res;
    // }
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
    if (process.env.REACT_APP_dev_env){
        return {
            team: 'Billal be Darned',
            points: 119.08,
            roster:
                [{
                    name: 'Philip Rivers',
                    position: 1,
                    activePosition: 0,
                    points: 9.08
                },
                {
                    name: 'Melvin Gordon',
                    position: 2,
                    activePosition: 2,
                    points: 25.3
                },
                {
                    name: 'Jamaal Williams',
                    position: 2,
                    activePosition: 2,
                    points: 3
                },
                {
                    name: 'DeAndre Hopkins',
                    position: 3,
                    activePosition: 4,
                    points: 15.6
                },
                {
                    name: 'Dez Bryant',
                    position: 3,
                    activePosition: 4,
                    points: 6.3
                },
                {
                    name: 'Rob Gronkowski',
                    position: 4,
                    activePosition: 6,
                    points: 22.4
                },
                {
                    name: 'Marquise Goodwin',
                    position: 3,
                    activePosition: 23,
                    points: 16.4
                },
                {
                    name: 'Redskins D/ST',
                    position: 16,
                    activePosition: 16,
                    points: 12
                },
                {
                    name: 'Matt Prater',
                    position: 5,
                    activePosition: 17,
                    points: 9
                }]
        };
    }
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

export {getSimpleActiveRoster, getLineups, getBoxScore};
