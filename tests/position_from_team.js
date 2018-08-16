// Get whole team score for the week
const getSimpleActiveRoster = async(leagueId, teamId, week) => {
    if (process.env.REACT_APP_dev_env){
        console.log("dev status~!!!");
        return {
            team: 'Billal be Darned',
            points: 119.08,
            roster:
                [{
                    name: 'Philip Rivers',
                    position: 1,
                    activePosition: 0,
                    points: 9.08
                },
                {
                    name: 'Melvin Gordon',
                    position: 2,
                    activePosition: 2,
                    points: 25.3
                },
                {
                    name: 'Jamaal Williams',
                    position: 2,
                    activePosition: 2,
                    points: 3
                },
                {
                    name: 'DeAndre Hopkins',
                    position: 3,
                    activePosition: 4,
                    points: 15.6
                },
                {
                    name: 'Dez Bryant',
                    position: 3,
                    activePosition: 4,
                    points: 6.3
                },
                {
                    name: 'Rob Gronkowski',
                    position: 4,
                    activePosition: 6,
                    points: 22.4
                },
                {
                    name: 'Marquise Goodwin',
                    position: 3,
                    activePosition: 23,
                    points: 16.4
                },
                {
                    name: 'Redskins D/ST',
                    position: 16,
                    activePosition: 16,
                    points: 12
                },
                {
                    name: 'Matt Prater',
                    position: 5,
                    activePosition: 17,
                    points: 9
                }]
        };
    }
    else if (leagueId && teamId && week) {
        let weekRoster = await getSingleTeamLineup(leagueId, teamId, week, env);   
        if (weekRoster.length > 0) {
            const simpleRoster = {
                "team": weekRoster[0].team.teamLocation + " " + weekRoster[0].team.teamNickname,
                "points": weekRoster[0].appliedActiveRealTotal,
                "roster": weekRoster[0].slots.map(playerObj => {
                    return {
                        "name": playerObj.player.firstName + " " + playerObj.player.lastName,
                        "position": playerObj.player.defaultPositionId,
                        "activePosition": playerObj.slotCategoryId,
                        "points": playerObj.currentPeriodRealStats.appliedStatTotal
                    };
                }).filter(player => (player.activePosition < 20 ) || (player.activePosition === 23)),
                // TODO: add "bench": total bench points
            };
            return simpleRoster;
        } else {
            return "No team data returned";
        }
    } else {
        throw new Error("Not enough params given to make request")
    }
};

// cycle through positions (kept on state) pass position score obj to positionCell component

// TODO: MAKE THIS FUNCTIONAL!!
const getPositionScore = (teamObj, position) => {
    const posLkp = {
        'qb': 0,
        'rb': 2,
        'wr': 4,
        'te': 6,
        'flx': 23,
        'k': 17,
        'dst': 16,
    };
    if (!teamObj) {
        return;
    } else {
        const totalPosScore = (acc, cur) => acc.points + cur.points;
        const posPlayers = teamObj.roster.filter(player => player.activePosition === posLkp[position]);
        let score = '...';
        if (posPlayers.length > 1) {
            score = posPlayers.reduce(totalPosScore);
        } else {
            // console.log(posPlayers);
            score = posPlayers[0].points;
        }
        const roundedScore = Math.round(score * 10) / 10;
        return roundedScore;
    }
};



let weekScore = getSimpleActiveRoster(286565, 7, 16);

console.log(weekScore);