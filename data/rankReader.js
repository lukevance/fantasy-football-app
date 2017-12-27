const $ = require('cheerio')
const fs = require('fs')

var htmlString = fs.readFileSync('./data/week2/rb_week2.html').toString()
var parsedHTML = $.load(htmlString)

// query
// for all elements type 'table'
// and loop over them
// parsedHTML('table').map((i, table) => {
//     if (i = 1) {
//         // the table html element into a cheerio object
//         table = $(table)
//         console.log(table.children('td'))
//         console.log('-------------------------');
//         console.log(i);
//     }
// });

let players = parsedHTML('table');
// for (var key in firstTable) {
//     console.log(key);
// }


console.log(players.children());
console.log(players.length); // 16
console.log('----------');
// console.log(rounds["0"].children["1"].children["0"].data); // === ROUND 1!!!
console.log(players["0"].children["1"].children["1"].children["1"].children["0"].data);
// let newTable = Object.keys(firstTable).filter(child => child !== 'options');

// console.log(Object.keys(newTable));
