const fs = require('fs');
const $ = require('cheerio');

const htmlString = fs.readFileSync('../data/weekly_ranks/week_2/qb_ranks.html').toString();
const html = $.load(htmlString);


let players = html('td.playertablePlayerName');

for (let key in players) {
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