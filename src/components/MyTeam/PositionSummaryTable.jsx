import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import myTeamSummary from '../../espnReader/mock-func-my-team-season-recap';
import PositionSummaryRow from './PositionSummaryRow';

class PositionSummaryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: Object.keys(myTeamSummary).filter(pos => pos === 'RB')
        }
    }
    render(){

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell># of Starters</TableCell>
                            <TableCell>Total Position Score</TableCell>
                            <TableCell>Avg Starter Score</TableCell>
                            <TableCell>Scoring Leader</TableCell>
                            <TableCell>Scoring Leader Avg</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.positions.map(pos => {
                            return (
                                <PositionSummaryRow position={pos} weeklyPosData={myTeamSummary[pos]}/>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>                
        );
    }
}

PositionSummaryTable.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles()(PositionSummaryTable);