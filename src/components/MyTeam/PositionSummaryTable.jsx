import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

class PositionSummaryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: ['qb', 'rb', 'wr']
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
                            <TableCell>Avg Score</TableCell>
                            <TableCell>Scoring Leader</TableCell>
                            <TableCell>Scoring Leader Avg</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.positions.map(pos => {
                            return (
                                <PositionSummaryRow position={pos} />
                            )
                        })}
                        {/* <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell># of Starters</TableCell>
                            <TableCell>Avg Score</TableCell>
                            <TableCell>Scoring Leader</TableCell>
                            <TableCell>Scoring Leader Avg</TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </Paper>                
        );
    }
}

PositionSummaryTable.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionSummaryTable);