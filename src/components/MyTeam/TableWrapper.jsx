import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import WeekRow from './WeekRow';

class TimePeriodTableWrapper extends Component {
    constructor(props) {
        super(props);
        this.generateWeekRows = this.generateWeekRows.bind(this);
    }

    // decide how many weeks should be produced
    generateWeekRows(weeksArray) {
        if (weeksArray && weeksArray.length > 0){
            return weeksArray.map(week => (
                //TODO: fix this below!!
                // <WeekRow
                //   week={week}
                // />
                <TableRow key={week}>
                    <TableCell>Week {week}</TableCell>
                </TableRow>
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
    }

    render() {
        const { teamId, leagueId, weeksArray } = this.props;
        const weekRows = this.generateWeekRows(weeksArray);
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
                    {weekRows}
                </TableBody>
            </Table>
        )
    }
}

export default TimePeriodTableWrapper;