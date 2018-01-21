const fetch = require('node-fetch');

// const request = async (url, options) => {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json;
// }

const getTeamsList = async (leagueId) => {
  let url = 'http://games.espn.com/ffl/api/v2/teams?leagueId=' + leagueId;
  const res = await fetch(url);
  const json = await res.json();
//   console.log(res);
  return json;
}

export default getTeamsList;