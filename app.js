//This is for myself---
var qb = {
    andyDalton: { player: "Andy Dalton", posRnk: 4, avgPts: 24.9, avgLstThree: 19 },
    tomBrady: { player: "Tom Brady", posRnk: 1, avgPts: 30.5, avgLstThree: 29 },
    benRoeth: { player: "Ben Roethlisberger", posRnk: 3, avgPts: 17.8, avgLstThree: 19 },
    peytonManning: { player: "Andy Dalton", posRnk: 3, avgPts: 24, avgLstThree: 19 },
    cPalmer: { player: "Carson Palmer", posRnk: 2, avgPts: 25.1, avgLstThree: 20 },
    aRodgers: { player: "Aaron Rodgers", posRnk: 2, avgPts: 25.1, avgLstThree: 18 },
    cNewton: { player: "Cam Newton", posRnk: 6, avgPts: 23.9, avgLstThree: 26 },
    pRivers: { player: "Phillip Rivers", posRnk: 5, avgPts: 24.2 },
    dCarr: { player: "Derek Carr", posRnk: 7, avgPts: 23 },
    dBrees: { player: "Drew Brees", posRnk: 8, avgPts: 22.7 }
};

var rb = {
    dFreeman: { player: "Devonta Freeman", posRnk: 1, avgPts: 21, avgLstThree: 18.3 },
    mIngram: { player: "Mark Ingram", posRnk: 2, avgPts: 13, avgLstThree: 16 },
    dMartin: { player: "Doug Martin", posRnk: 2, avgPts: 13, avgLstThree: 18.7 },
    cIvory: { player: "Chris Ivory", posRnk: 4, avgPts: 12, avgLstThree: 13 },
    aPeterson: { player: "Adrian Peterson", posRnk: 4, avgPts: 12, avgLstThree: 8.6 },
    lMiller: { player: "Lamar Miller", posRnk: 4, avgPts: 17, avgLstThree: 20.6 },
    lBell: { player: "Leveon Bell", posRnk: 5, avgPts: 11, avgLstThree: 11 },
    lMurray: { player: "Latavius Murray", posRnk: 19, avgPts: 8, avgLstThree: 7 },
};

var cmsh = {
    ownerName: "Mark",
    qb1: { player: qb.aDalton },
    rb1: { player: rb.lBell },
    rb2: { name: "Latavius Murray", posRnk: 19, avgPts: 8, avgLstThree: 7 },
    wr1: { name: "Dez Bryant", posRnk: 5, avgPts: 11, avgLstThree: 19 },
    wr2: { name: "Julian Edelman", posRnk: 9 }
};

var hoth = {
    qb1: { player: qb.tomBrady.player, rank: qb.tomBrady.posRnk },
    rb1: "Adrian Peterson",
    rb2: "Dion Lewis",
    wr1: "Julio Jones",
    wr2: "Jeremy Maclin",
    te1: "Gary Barnidge",
    dSt: "Patriots",
    k: "S Lambo"
};

var tnr = {
    qb1: qb.aRodgers,
    rb1: rb.dFreeman
}

function strengthCalcQb(teamOne, teamTwo) {
    if (teamOne.qb1.rank < teamTwo.qb1.rank) {
        console.log(teamOne.qb1.player + " is better than " + teamTwo.qb1.player);
    } else if (teamOne.qb1.rank === teamTwo.qb1.rank) {
        console.log(teamOne.qb1.player + " is matched by " + teamTwo.qb1.player);
    } else {
        console.log(teamTwo.qb1.player + " is better than " + teamOne.qb1.player);
    }

}
strengthCalcQb(cmsh, hoth);


// funcion to compare between groups







// power ranking
// player weights: find out by comparing point differential in winning choices and losing choices
// tier 1:
// qb (top5 avg score) /
// rb1
// rb2
// tier 2:
// rb2:
// wr2:
// flex:
// te:
//
// combination of current streak,