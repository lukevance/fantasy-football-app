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
const getSingleTeamLineup = require('../src/espnReader/scoreboard').getSingleTeamLineup;
// const curry_getSingleTeamLineup = R.curry(getSingleTeamLineup);
// const getSingleTeamfromLeague = curry_getSingleTeamLineup('286565');
// const getWeeks = getSingleTeamfromLeague(7);


const func = (pos, timePeriodStart, timePeriodEnd) => {
    const timePeriod = R.range(timePeriodStart, timePeriodEnd + 1);
    timePeriod.map(async week => {
        const weekDetails = await getSingleTeamLineup('286565', 7, week);
        const roster = weekDetails[0].slots;
        console.log(roster);
    })
}

// func('qb', 1, 4);

const foo = async () => {
    const week = await getSingleTeamLineup('286565', 7, 1);
    console.log(weeks);
}

foo();