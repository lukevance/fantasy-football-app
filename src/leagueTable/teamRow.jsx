import React, {Component} from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

class TeamRow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        const teams = this.props.teamsList;
        console.log('teamRow Component ----')
        console.log(teams);
        if (teams.length > 0) {
            return teams.map(team => (
                <TableRow key={team.teamId}>
                    <TableCell>{team.teamLocation + " " + team.teamNickname}</TableCell>
                    {/* <TableCell numeric>{n.qb}</TableCell>
                    <TableCell numeric>{n.rb}</TableCell>
                    <TableCell numeric>{n.wr}</TableCell>
                    <TableCell numeric>{n.te}</TableCell>
                    <TableCell numeric>{n.d}</TableCell>
                    <TableCell numeric>{n.k}</TableCell> */}
                </TableRow>
            ));
        } else {
            return (
                <TableRow key="1">
                    <TableCell>"Teams Loading..."</TableCell>
                    {/* <TableCell numeric>{n.qb}</TableCell>
                    <TableCell numeric>{n.rb}</TableCell>
                    <TableCell numeric>{n.wr}</TableCell>
                    <TableCell numeric>{n.te}</TableCell>
                    <TableCell numeric>{n.d}</TableCell>
                    <TableCell numeric>{n.k}</TableCell> */}
                </TableRow>
            )
        }
        
    }
}

export default TeamRow;