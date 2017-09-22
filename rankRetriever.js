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
let env = {
    league: 286565,
    team: 7
}

let params = '?leagueId=286565&teamId=7&scoringPeriodId=2&seasonId=2017&slotCategoryId=2';

let positions = {
    QB: 0,
    RB: 2,
    WR: 4
};

let week = 2;

// get position ranks for week
const getRanks = async() => {
    const res = await fetch(baseURL + params);
    const html = await res.text();
    // await console.log(html);
    await saveFile('./data/rb_ranks.html', html);
};

getRanks();




// create file