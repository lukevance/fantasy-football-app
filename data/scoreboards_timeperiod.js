// GOAL: entire league game scores over period of time
// 
// sample returned payload
// given timePeriodStart=1, timePeriodEnd=4
// return [{
//     "week": "1",
//     "gameSummaries": [{
//             "winner": {
//                     "teamId": 1,
//                     "teamName": "",
//                     "score": 123,
//                 },
//             "loser": {}
//         },
//     ]
// }]

const R = require('ramda');
const getWeekScoreboard = require('../src/espnReader/scoreboards').getWeekScoreboard;
const curry_getWeekScoreboard = R.curry(getWeekScoreboard);
const getWeekScoreboardFromLeague = curry_getWeekScoreboard('286565');

const scoreboardsOverPeriod = async (timePeriodStart, timePeriodEnd) => {
    const timePeriod = R.range(timePeriodStart, timePeriodEnd +1);
    // retrieve all scoreboards for given time period
    const scoreboards = await Promise.all(timePeriod.map( async week => {
        const weekScoreboard = await getWeekScoreboardFromLeague(week);
        // weekScoreboard.scoreboard.matchups.forEach(game => console.log(game.winner));
        // for each week, return a simplified game summary
        if (weekScoreboard.scoreboard){
            return {
                "week": week,
                "gameSummaries": await Promise.all(weekScoreboard.scoreboard.matchups.map(game => {
                    return {
                        "winner": game.teams
                                    .filter(team => team[game.winner] || (game.winner === 'away' && !team.home))
                                    .map(team => {
                                        return {
                                            "teamId": team.team.teamId,
                                            "teamName": `${team.team.teamLocation} ${team.team.teamNickname}`,
                                            "score": team.score
                                        }
                                    })[0],
                        "loser": game.teams
                                    .filter(team => !team[game.winner])
                                    .map(team => {
                                        return {
                                            "teamId": team.team.teamId,
                                            "teamName": `${team.team.teamLocation} ${team.team.teamNickname}`,
                                            "score": team.score
                                        }
                                    })[0]
                        }
                }))
            }
        } else {
            throw new Error ("The scoreboard was not able to be returned");
        }
        
    }));
    return scoreboards;
}

const results = async () => {
    const data = await scoreboardsOverPeriod(1, 2);
    console.log(JSON.stringify(data));
};
results();