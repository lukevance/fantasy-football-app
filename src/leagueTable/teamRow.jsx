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
            },
            wr: {
                score: '...'
            },
            te: {
                score: '...'
            },
            flx: {
                score: '...'
            },
            k: {
                score: '...'
            },
            d: {
                score: '...'
            },
            // total: {
            //     score: '...'
            // }
        };
        this.getTeamScore = this.getTeamScore.bind(this);
    }

    getTeamScore = async (teamId) => {
        let {leagueId, week} = this.props;
        let scoreboardData = await scoreBoard(leagueId, teamId, week);
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
            const totalPosScore = ( acc, cur ) => acc.points + cur.points;
            let posPlayers = teamObj.roster.filter(player => player.activePosition === posLkp[position]);
            let score= '...';
            if (posPlayers.length > 1) {
                score = posPlayers.reduce(totalPosScore);
            } else {
                console.log(posPlayers);
                score = posPlayers[0].points;
            }
            let roundedScore = Math.round( score * 10 ) / 10;
            return roundedScore.toString();
        }
    };

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

    render(){
        const {team} = this.props;
        const {teamData} = this.state;
        // check if team data has been returned yet, if not return loading status
        let positions = Object.keys(this.state).filter(key => key != ('teamData' || 'total'));
        let playerColumns = positions.map(position => {
            return(
                <TableCell>{this.state[position].score}</TableCell>
            );
        });
        return (
            <TableRow>
                <TableCell>{team.teamLocation + " " + team.teamNickname}</TableCell>
                {playerColumns}
                <TableCell numeric>{}</TableCell>
            </TableRow>
        );
    }
}

export default TeamRow;