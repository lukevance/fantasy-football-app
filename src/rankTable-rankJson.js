const fs = require('fs');
const $ = require('cheerio');
const getRanks = require('../rankRetriever');
// const htmlString = fs.readFileSync('../data/weekly_ranks/week_2/rb_ranks.html').toString();
const htmlString = getRanks(2, 'QB');
const html = $.load(htmlString);

let players = html('td.playertablePlayerName');
console.log(players.length);
for (let key in players) {
    // console.log(key);
    let playerObj = {
        name: "",
        id: "",
        points: ""
    };

    if (key == 0 || key * 1) {
        if (key == 0) {
            console.log(players[key].children[0]);
        }
    }
}