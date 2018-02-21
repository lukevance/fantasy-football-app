import React, {Component} from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import scoreBoard from '../../espnReader/scoreboard';


class TeamRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: null,
        };
        this.getTeamScore = this.getTeamScore.bind(this);
    }

    // API handler to get team score data for current team in row
    getTeamScore = async (teamId) => {
        let {leagueId, week} = this.props;
        let scoreboardData = await scoreBoard(leagueId, teamId, week);
        // if (teamId === 7) {console.log(scoreboardData)};
        return await scoreboardData;
    };

    // TODO: MAKE THIS FUNCTIONAL!!
    getPositionScore = (teamObj, position) => {
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
            const totalPosScore = ( acc, cur ) => acc.points + cur.points;
            let posPlayers = teamObj.roster.filter(player => player.activePosition === posLkp[position]);
            let score= '...';
            if (posPlayers.length > 1) {
                score = posPlayers.reduce(totalPosScore);
            } else {
                // console.log(posPlayers);
                score = posPlayers[0].points;
            }
            let roundedScore = Math.round( score * 10 ) / 10;
            return roundedScore;
        }
    };

    getTotalScore = (teamData) => {
        // const reducer = (accumulator, curr) => accumulator.points + curr.points;
        const justPoints = teamData.roster.map(player => player.points);
        let total =  justPoints.reduce((x,y) => x+y);
        let roundedScore = Math.round( total * 10 ) / 10;
        return roundedScore;
    }

    async componentDidMount() {
        // get list of teams from league reader based on leagueId passed from App
        await this.setState({
          teamData: await this.getTeamScore(this.props.team.teamId)
        });
        // update player scores in state
        if (this.state.teamData){
            Object.keys(this.state).filter(key => key != ('teamData' || 'total')).forEach(position => {
                this.setState({
                    [position]: {
                        score: this.getPositionScore(position, this.state.teamData)
                    }
                });
            });
        }
    }

    postionReducer = (teamData, position) => {
        if (teamData && position){
            
        }
    }

    render(){
        const {team} = this.props;
        const {teamData} = this.state;
        // check if team data has been returned yet, if not return loading status
        let positions = []
        // let playerColumns = positions.map(position => {
        //     return(
        //         <TableCell>{this.state[position].score}</TableCell>
        //     );
        // });
        if (teamData) {
            return(
                <TableRow>
                    <TableCell>{team.teamLocation + " " + team.teamNickname}</TableCell>
                    <TableCell numeric key="qb">{this.getPositionScore(teamData, 'qb')}</TableCell>
                    <TableCell numeric key="rb">{this.getPositionScore(teamData, 'rb')}</TableCell>
                    <TableCell numeric key="wr">{this.getPositionScore(teamData, 'wr')}</TableCell>
                    <TableCell numeric key="te">{this.getPositionScore(teamData, 'te')}</TableCell>
                    <TableCell numeric key="flx">{this.getPositionScore(teamData, 'flx')}</TableCell>
                    <TableCell numeric key="dst">{this.getPositionScore(teamData, 'dst')}</TableCell>
                    <TableCell numeric key="k">{this.getPositionScore(teamData, 'k')}</TableCell>
                    <TableCell numeric key="total">{this.getTotalScore(teamData)}</TableCell>
                </TableRow>    
            )
        } else {
            return null;
        }
    }
}

export default TeamRow;