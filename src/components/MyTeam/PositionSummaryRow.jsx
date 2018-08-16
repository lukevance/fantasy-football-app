import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as R from 'ramda';


class PositionRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            leagueStats: {

            }
        }
    }
    
    render(){
        const {position, weeklyPosData} = this.props;
        let activePlayers = [];
        weeklyPosData.forEach(weekPlayers => weekPlayers.forEach(player => {
            if (player.active) activePlayers.push(player);
        }));
        // find unique players
        let uniquePlayers = [];
        activePlayers.forEach(plyr => {
            // console.log()
            if (!R.contains(plyr.name, uniquePlayers.map(uniqPlyr => uniqPlyr.name))) {
                uniquePlayers.push(plyr);
            }
        })
        const playerSummary = uniquePlayers.map(plyr => {
            const gamesPlayed = activePlayers.filter(actPlyr => actPlyr.name === plyr.name);
            return {
                name: plyr.name,
                starts: gamesPlayed.length,
                totalScore: R.sum(gamesPlayed.map(game => game.score))
            }
        })
        console.log(R.sortBy(i => i.totalScore, playerSummary));
        
        const scoringLeader = R.sortBy(i => i.totalScore, playerSummary)[playerSummary.length - 1];
        
        return (
            <TableRow>
                {/* position title */}
                <TableCell>{position}</TableCell>
                {/* # of starters */}
                <TableCell>{uniquePlayers.length}</TableCell>
                {/* Total active score */}
                <TableCell>{R.sum(activePlayers.map(plyr => plyr.score))}</TableCell>
                {/* Avg Score */}
                <TableCell>{R.sum(activePlayers.map(plyr => plyr.score)) / activePlayers.length}</TableCell>
                {/* Score leader */}
                <TableCell>{scoringLeader.name}</TableCell>
                {/* Scoring leader average*/}
                <TableCell>{scoringLeader.totalScore}</TableCell>
                {/* Scoring leader average*/}
                <TableCell>{scoringLeader.totalScore / scoringLeader.starts}</TableCell>
            </TableRow>
        )
    }
}

export default PositionRow;