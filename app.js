//This is for myself---
var qb = {
  andyDalton: {player:"Andy Dalton", posRnk: 3, avgPts: 24, avgLstThree: 19},
  tomBrady: {player:"Tom Brady", posRnk: 1, avgPts: 26, avgLstThree: 29},
  benRoeth: {player:"Andy Dalton", posRnk: 3, avgPts: 24, avgLstThree: 19},
  peytonManning: {player:"Andy Dalton", posRnk: 3, avgPts: 24, avgLstThree: 19},
};

var rb = {
  lBell: {player:"Leveon Bell", posRnk: 5, avgPts: 11, avgLstThree: 11},
  lMurray: {player:"Latavius Murray", posRnk: 19, avgPts: 8, avgLstThree: 7},
}

var cmsh = {
  ownerName: "Mark",
  qb1: {player: qb.andyDalton.player, rank: qb.andyDalton.posRnk},
  rb1: {player:"Leveon Bell", posRnk: 5, avgPts: 11, avgLstThree: 11},
  rb2: {name:"Latavius Murray", posRnk: 19, avgPts: 8, avgLstThree: 7},
  wr1: {name:"Dez Bryant" ,posRnk: 5, avgPts: 11, avgLstThree: 19}
};

var hoth = {
  qb1: {player: qb.tomBrady.player, rank: qb.tomBrady.posRnk},
  rb1: "Adrian Peterson",
  rb2: "Dion Lewis",
  wr1: "Julio Jones",
};

function strengthCalcQb(teamOne, teamTwo){
  if (teamOne.qb1.rank < teamTwo.qb1.rank) {
    console.log(teamOne.qb1.player + " is better than " + teamTwo.qb1.player);
  }
  else if (teamOne.qb1.rank === teamTwo.qb1.rank){
    console.log(teamOne.qb1.player + " is matched by " + teamTwo.qb1.player);
  }
  else {
      console.log(teamTwo.qb1.player + " is better than " + teamOne.qb1.player);
  }

}
strengthCalcQb(cmsh, hoth);
