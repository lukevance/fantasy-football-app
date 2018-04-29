// const scoreboardData = require('./scoreboard_luke_wk15.json');

// scoreboardData.teams.forEach(x => console.log(Object.keys(x)));

const scoreBoard = require("../src/espnReader/scoreboard");
// API handler to get team score data for current team in row
getTeamScore = async (week, teamId, leagueId) => {
    // let { leagueId, week } = this.props;
    let scoreboardData = await scoreBoard(leagueId, teamId, week);
    // if (teamId === 7) {console.log(scoreboardData)};
    return await scoreboardData;
};


console.log(getTeamScore(15, 7, 286565));