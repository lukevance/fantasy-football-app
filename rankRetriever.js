const fs = require('fs');
const fetch = require('node-fetch');

// function to save data
const saveFile = (path, content) => {
    fs.writeFile(path, content, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(path + " was saved!");
    });
}

// This is a weekly rank retriever, it pulls ranks and creates corresponding html pages

let baseURL = 'http://games.espn.com/ffl/leaders';
let params = {
    league: 286565,
    team: 7,
    season: 2017,
    week: 1
}

// '?leagueId=286565&teamId=7&scoringPeriodId=1&seasonId=2017&slotCategoryId=2';

let positions = {
    QB: 0,
    RB: 2,
    WR: 4
};

let week = 2;

// get position ranks for week
const getRanks = async(week, position) => {
    let posId;
    switch (position) {
        case 'QB':
            posId = 0;
            break;
        case 'RB':
            posId = 2;
            break;
        default:
            posId = 1;
            position = 'Top50';
            break;
    }
    const res = await fetch(baseURL + '?leagueId=' + params.league + '&teamId=' + params.team + '&scoringPeriod=' + week + '&seasonId=' + params.season + 'slotCategoryId=' + posId);
    const html = await res.text();
    // await console.log(html);
    await saveFile('./data/weekly_ranks/week_' + week + '/' + position + '_ranks.html', html);
};

getRanks(1, 'QB');




// create file