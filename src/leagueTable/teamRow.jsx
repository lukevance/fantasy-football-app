import React, {Component} from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import scoreBoard from '../espnReader/scoreboard';


class TeamRow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getTeamScore = this.getTeamScore.bind(this);
    }

    getTeamScore = async (teamId) => {
        let scoreboardData = await scoreBoard(this.props.league, teamId, '15');
        console.log(scoreboardData);
    };

    async componentDidMount() {
        // get list of teams from league reader based on leagueId passed from App
        await this.setState({
          teamData: await this.getTeamScore(this.props.team.teamId)
        });
    }

    render(){
        const {team} = this.props;
        // check if team data has been returned yet, if not return loading status
        return (
            <TableRow>
                <TableCell>{team.teamLocation + " " + team.teamNickname}</TableCell>
                {/* <TableCell numeric>{n.qb}</TableCell>
                <TableCell numeric>{n.rb}</TableCell>
                <TableCell numeric>{n.wr}</TableCell>
                <TableCell numeric>{n.te}</TableCell>
                <TableCell numeric>{n.d}</TableCell>
                <TableCell numeric>{n.k}</TableCell> */}
            </TableRow>
        );
    }
}

export default TeamRow;