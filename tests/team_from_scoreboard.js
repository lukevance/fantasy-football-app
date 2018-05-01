// const scoreboardData = require('./scoreboard_luke_wk15.json');

// scoreboardData.teams.forEach(x => console.log(Object.keys(x)));

// const scoreBoard = require("../src/espnReader/scoreboard");
const {getBoxScore, getSimpleActiveRoster} = require('../src/espnReader/scoreboard');
// const boxscore = require("./scoreboard_luke_wk15.json");

// const getLineups = async (leagueId, teamId, scoringPeriodId, env) => {
//     // const lineups = await getBoxScore(leagueId, teamId, scoringPeriodId, env);
//     const lineups = boxscore;
//     return lineups.boxscore.teams;
//   }
  
//   const getSingleTeamLineup = async (leagueId, teamId, scoringPeriodId, env) => {
//     const lineups = await getLineups(leagueId, teamId, scoringPeriodId, env);
//     const single = await lineups.filter(lineup => lineup.teamId === teamId);
//     return single;
//   }
// API handler to get team score data for current team in row
const getTeamScore = async (week, teamId, leagueId) => {
    // let { leagueId, week } = this.props;
    let scoreboardData = await getSimpleActiveRoster(leagueId, teamId, week);
    // if (teamId === 7) {console.log(scoreboardData)};
    // return scoreboardData;
    console.log(await scoreboardData);
};


getTeamScore(15, 7, 286565, "dev");