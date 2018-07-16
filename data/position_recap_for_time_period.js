// GOAL: total points and review of players over given period
// 
// sample returned payload
// given position=QB, timePeriodStart=1, timePeriodEnd=4
// return [{
//     "name": "Philip Rivers",
//     "games": [{
//             "week": 1,
//             "points": 14
//         },
//         {
//             "week": 2,
//             "points": 11
//         }
//     ]
// }]

const R = require('ramda');
const getSingleTeamLineup = require('../src/espnReader/lineups_scores').getSingleTeamLineup;
const curry_getSingleTeamLineup = R.curry(getSingleTeamLineup);
const getSingleTeamfromLeague = curry_getSingleTeamLineup('286565');
const getWeeksForTeam = getSingleTeamfromLeague(7);


const positionStatsOverPeriod = async (pos, timePeriodStart, timePeriodEnd) => {
    const timePeriod = R.range(timePeriodStart, timePeriodEnd + 1);
    const positionReview = await Promise.all(timePeriod.map( async week => {
        const weekDetails = await getWeeksForTeam(week);
        const roster = weekDetails[0].slots;
        const singlePosition = roster.filter(plyr => plyr.slotCategoryId === pos);
        const simplePlayerStats = await Promise.all(singlePosition.map(plyr => {
            return {
                "name": `${plyr.player.firstName} ${plyr.player.lastName}`,
                "games": {
                    "week": week,
                    "score": plyr.currentPeriodRealStats.appliedStatTotal
                }
            }
        }));
        return simplePlayerStats[0];
    }));
    return positionReview;
}

const results = async () => {
    const data = await positionStatsOverPeriod(0, 1, 13);
    console.log(data);
};
results();