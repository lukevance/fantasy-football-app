import React, {Component} from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import scoreBoard from '../espnReader/scoreboard';


class TeamRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: null,
            // set holders for player data
            qb: {
                score: '...'
            },
            rb: {
                score: '...'
            }
        };
        this.getTeamScore = this.getTeamScore.bind(this);
    }

    getTeamScore = async (teamId) => {
        let {leagueId, week} = this.props;
        let scoreboardData = await scoreBoard(leagueId, teamId, week);
        // console.log(scoreboardData);
        return await scoreboardData;
    };

    // TODO: MAKE THIS FUNCTIONAL!!
    getPositionScore = (position, teamObj) => {
        const posLkp = {
            'qb': 0,
            'rb': 2,
            'wr': 4,
            'te': 6,
            'flx': 23,
            'k': 17,
            'd': 16,
        };
        
        if (!teamObj) {
            return;
        } else {
            console.log('----------wawa----------')
            console.log(teamObj);
            // console.log(teamObj.roster[0].activePosition)
            
            const totalPosScore = ( acc, cur ) => acc.points + cur.points;
            let posPlayers = teamObj.roster.filter(player => player.activePosition == posLkp[position]);
            console.log(posPlayers.reduce(totalPosScore));
            let score = posPlayers.reduce(totalPosScore);
            return score.toString();
        }
    };

    async componentDidMount() {
        // get list of teams from league reader based on leagueId passed from App
        await this.setState({
          teamData: await this.getTeamScore(this.props.team.teamId)
        });
        // update player scores in state
        if (this.state.teamData){
            Object.keys(this.state).filter(key => key != 'teamData').forEach(position => {
                this.setState({
                    [position]: {
                        score: this.getPositionScore(position, this.state.teamData)
                    }
                });
            });
        }
        // console.log(this.state.rb.)
    }

    render(){
        const {team} = this.props;
        const {teamData} = this.state;
        // check if team data has been returned yet, if not return loading status
        return (
            <TableRow>
                <TableCell>{team.teamLocation + " " + team.teamNickname}</TableCell>
                {Object.keys(this.state).filter(key => key != 'teamData').map(position => {
                    // let score = positionScore(pos, teamData);
                    // console.log(player.score);
                    return(
                        <TableCell>{this.state[position].score}</TableCell>
                    );
                })}
                {/* <TableCell numeric>{positionScore('qb', teamData)}</TableCell>
                <TableCell numeric>{positionScore('rb', teamData)}</TableCell>
                <TableCell numeric>{positionScore('wr', teamData)}</TableCell>
                <TableCell numeric>{positionScore('te', teamData)}</TableCell>
                <TableCell numeric>{positionScore('flx', teamData)}</TableCell>
                <TableCell numeric>{positionScore('d', teamData)}</TableCell>
                <TableCell numeric>{positionScore('k', teamData)}</TableCell> */}
            </TableRow>
        );
    }
}

export default TeamRow;