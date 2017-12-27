var $ = require('cheerio')
var fs = require('fs')

var htmlString = fs.readFileSync('./data/draftRecap.html').toString()
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

let rounds = parsedHTML('table');
// for (var key in firstTable) {
//     console.log(key);
// }


console.log(rounds.children());
console.log(rounds.length); // 16
console.log('----------');
// console.log(rounds["0"].children["1"].children["0"].data); // === ROUND 1!!!
console.log(rounds["0"].children["1"].children["1"].children["1"].children["0"].data);
// let newTable = Object.keys(firstTable).filter(child => child !== 'options');

// console.log(Object.keys(newTable));