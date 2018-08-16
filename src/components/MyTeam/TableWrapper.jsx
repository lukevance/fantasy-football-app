import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import WeekRow from './WeekRow';

// the TimePeriodTableWRapper decides how many weeks to render in the table and 
class TimePeriodTableWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { teamId, leagueId, weeksArray } = this.props;
        // decide how many weeks should be produced
        const weekRows = () => {
            if (weeksArray && weeksArray.length > 0) {
                return weeksArray.map(week => (
                    //TODO: fix this below!!
                    <WeekRow
                        leagueId={leagueId}
                        teamId={teamId}
                        week={week}
                    />
                    // <TableRow key={week}>
                    //     <TableCell>Week {week}</TableCell>
                    // </TableRow>
                ));
            } else {
                return (
                    <TableRow key="1">
                        <TableCell>Loading...</TableCell>
                        <TableCell>Loading...</TableCell>
                        <TableCell>Loading...</TableCell>
                        <TableCell>Loading...</TableCell>
                        <TableCell>Loading...</TableCell>
                    </TableRow>
                )
            }
        };
        return (
            // <Table className={classes.table}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Week</TableCell>
                        <TableCell numeric>QB</TableCell>
                        <TableCell numeric>RB</TableCell>
                        <TableCell numeric>WR</TableCell>
                        <TableCell numeric>TE</TableCell>
                        <TableCell numeric>Flex</TableCell>
                        <TableCell numeric>D/ST</TableCell>
                        <TableCell numeric>K</TableCell>
                        <TableCell numeric>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weekRows()}
                </TableBody>
            </Table>
        )
    }
}

export default TimePeriodTableWrapper;