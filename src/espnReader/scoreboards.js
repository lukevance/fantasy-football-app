const fetch = require('node-fetch');

const request = async (url, options) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const getWeekScoreboard = async (leagueId, scoringPeriodId) => {
    const url = `http://games.espn.com/ffl/api/v2/scoreboard?leagueId=${leagueId}&scoringPeriodId=${scoringPeriodId}&seasonId=2017`;
    const res = await request(url);
    return res;
}

module.exports = {
    getWeekScoreboard
}