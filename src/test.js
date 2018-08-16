const scoreBoard = require('./espnReader/scoreboard');

const getScoreBoard = async() => {
    let scoreboard = await scoreBoard('286565', '7', '15');
    console.log(scoreboard);
};

getScoreBoard();
