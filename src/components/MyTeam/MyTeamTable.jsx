import React, { Component } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import TimePeriodTableWrapper from "./TableWrapper";


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


class MyTeam extends Component {
  constructor(props) {
    super(props);
    // default setting for time period is the regular season
    this.state = {
      period: "post"
    };
    this.chooseTimePeriod = this.chooseTimePeriod.bind(this);
  }

  chooseTimePeriod(newPeriod){
    this.setState({
      period: newPeriod
    });
  }

  // function to return array for week numbers
  generateWeeksArray(period){
    if (period === "regular"){
      return R.range(1, 13+1);
    } else if (period === "post"){
      return R.range(14, 17+1);
    } else {
      return [0];
    }
  }

  render() {
    const { classes } = this.props;
    const { teamsId, leagueId, period } = this.state;
    // use state.period to create text for table title
    const titlePeriod = period[0].toUpperCase() + period.slice(1);
    const weeksArray = this.generateWeeksArray(period);
    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {titlePeriod} Season Position Breakdown
            </Typography>
          </Toolbar>
        </div>
        <TimePeriodTableWrapper
          weeksArray={weeksArray}
          teamId={teamsId}
          leagueId={leagueId}
        />
      </Paper>
    );
  }

}

MyTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTeam);
