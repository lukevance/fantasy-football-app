import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import leagueReader from '../../espnReader/leagueInfo';
import TeamRow from './teamRow';
import WeekSelectMenu from '../weekSelectMenu';

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
    // hardcoded leagueId for testing purposes
    this.state = {
      week: '15',
      teamsList: []
    };
    this.getTeams = this.getTeams.bind(this);
  }

  getTeams = async (leagueId) => {
    console.log('get teams!');
    let data = await leagueReader(this.state.leagueId);
    let teamList = await data.teams;
    return teamList;
  }

  async componentDidMount() {
    // get list of teams from league reader based on leagueId passed from App
    await this.setState({
      teamsList: await this.getTeams(this.state.leagueId)
    });
  }

  render(){
    const { classes, leagueId } = this.props;
    const { teamsList, week } = this.state;
    let teams;
    if (teamsList && teamsList.length > 0) {
      teams = teamsList.map(team => (
        <TeamRow 
          team={team}
          week={week}
          leagueId={leagueId}
          key={team.teamId}
        />
      ));
  } else {
      teams = (
          <TableRow key="1">
              <TableCell>"Teams Loading..."</TableCell>
          </TableRow>
      )
  }
    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Week {week} Ranks by Position
            </Typography>
            <WeekSelectMenu />
          </Toolbar>
        </div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
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
              {teams}
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
