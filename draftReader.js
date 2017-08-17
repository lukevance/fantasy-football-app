var $ = require('cheerio')
var fs = require('fs')

var htmlString = fs.readFileSync('./data/draftRecap.html').toString()
var parsedHTML = $.load(htmlString)

// query for all elements with class 'foo' and loop over them
parsedHTML('table').map(function(i, table) {
    // the foo html element into a cheerio object (same pattern as jQuery)
    table = $(table)
    console.log(table.children('td'))
})