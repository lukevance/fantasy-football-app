import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from "material-ui/Button";
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import WeekRow from './WeekRow';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: '10%'
  },
  table: {
    minWidth: 700,
  },
});


class BasicTable extends Component {
  constructor(props){
    super(props);
    // default setting is regular season performance
    this.state = {
        period: "regular"
    };
  }

  render(){
    const { classes } = this.props;
    const { teamsId, leagueId, period} = this.state;
    // user state.period to create text for table title
    let titlePeriod = period[0].toUpperCase() + period.slice(1);
    // function to return array for week numbers
    const selectedWeeks = (start, end) => {
      let weeksArray = [];
      for (let i = start; i <= end; i++){
        weeksArray.push(i);
      }
      return weeksArray;
    }
    // initialize week selection based on state.period
    let weeks;
    switch (this.state.period) {
      case 'regular':
        // let weekNums = selec
        weeks = selectedWeeks(1, 13).map(week => (
          // <WeekRow
          //   week={week}
          // />
          <TableRow key={week}>
              <TableCell>Week {week}</TableCell>
          </TableRow>
        ));
        break;
      default:
        weeks = (
          <TableRow key="1">
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
          </TableRow>
        )
        break;
    }


    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {titlePeriod} Season Position Breakdown
            </Typography>
          </Toolbar>
        </div>
        <Table className={classes.table}>
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
              {weeks}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);
