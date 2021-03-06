import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {getSimpleActiveRoster} from '../../espnReader/lineups_scores';
import PositionScoreCell from '../positionScoreTableCell';

class WeekRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: [
                "qb",
                "rb",
                "wr",
                "te",
                "flex",
                "dst",
                "k",
            ],
        };
        this.getTeamScore = this.getTeamScore.bind(this);
        this.getPositionScore = this.getPositionScore.bind(this);
    }

    //TODO get list of active position (this is set per league), set list of positions to state

    // Get whole team score for the week
    getTeamScore = async (teamId, leagueId, week) => {
        let scoreboardData = await getSimpleActiveRoster(leagueId, teamId, week);
        if (teamId === 7) {console.log(scoreboardData)};
        return await scoreboardData;

        //* -------- getSimpleActiveRoster function returns this result structure
        // for testing/development
        // console.log("return the team obj!");
        // return {
        //     team: 'Billal be Darned',
        //     points: 119.08,
        //     roster:
        //         [{
        //             name: 'Philip Rivers',
        //             position: 1,
        //             activePosition: 0,
        //             points: 9.08
        //         },
        //         {
        //             name: 'Melvin Gordon',
        //             position: 2,
        //             activePosition: 2,
        //             points: 25.3
        //         },
        //         {
        //             name: 'Jamaal Williams',
        //             position: 2,
        //             activePosition: 2,
        //             points: 3
        //         },
        //         {
        //             name: 'DeAndre Hopkins',
        //             position: 3,
        //             activePosition: 4,
        //             points: 15.6
        //         },
        //         {
        //             name: 'Dez Bryant',
        //             position: 3,
        //             activePosition: 4,
        //             points: 6.3
        //         },
        //         {
        //             name: 'Rob Gronkowski',
        //             position: 4,
        //             activePosition: 6,
        //             points: 22.4
        //         },
        //         {
        //             name: 'Marquise Goodwin',
        //             position: 3,
        //             activePosition: 23,
        //             points: 16.4
        //         },
        //         {
        //             name: 'Redskins D/ST',
        //             position: 16,
        //             activePosition: 16,
        //             points: 12
        //         },
        //         {
        //             name: 'Matt Prater',
        //             position: 5,
        //             activePosition: 17,
        //             points: 9
        //         }]
        // }

    };

    // cycle through positions (kept on state) pass position score obj to positionCell component

    // TODO: MAKE THIS FUNCTIONAL!!
    getPositionScore = (teamObj, position) => {
        const posLkp = {
            'qb': 0,
            'rb': 2,
            'wr': 4,
            'te': 6,
            'flex': 23,
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
                score = posPlayers[0].points;
            }
            const roundedScore = Math.round(score * 10) / 10;
            return roundedScore;
        }
    };

    getTotalScore = (teamData) => {
        // const reducer = (accumulator, curr) => accumulator.points + curr.points;
        const total = teamData.roster.map(player => player.points).reduce((x, y) => x + y);
        // const total = justPoints.reduce((x, y) => x + y);
        let roundedScore = Math.round(total * 10) / 10;
        return roundedScore;
    }

    async componentDidMount() {
        const {teamId, leagueId, week} = this.props;
        // get list of teams from league reader based on leagueId passed from App
        await this.setState({
            teamData: await this.getTeamScore(teamId, leagueId, week)
        });
    }

    render() {
        const { week } = this.props;
        const { teamData, positions } = this.state;
        if (teamData) {
            return (
                <TableRow>
                    <TableCell>Week {week}</TableCell>
                    {positions.map(pos => {
                        return (
                            <PositionScoreCell position={pos} score={this.getPositionScore(teamData, pos)} />        
                        )
                    })}
                    <TableCell numeric key="total">{this.getTotalScore(teamData)}</TableCell>
                </TableRow>
            )
        } else {
            return null;
        }
    }
}

export default WeekRow;