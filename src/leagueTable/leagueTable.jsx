import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from "material-ui/Button";
import scoreBoard from '../espnReader/scoreboard';
import leagueReader from '../espnReader/leagueInfo';
import TeamRow from './teamRow';

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
      leagueId: '286565',
      teamsList: []
    };
    this.getScoreBoard = this.getScoreBoard.bind(this);
    this.getTeams = this.getTeams.bind(this);
  }

  getTeams = async (leagueId) => {
    let data = await leagueReader(this.state.leagueId);
    let teamList = await data.teams;
    return teamList;
  }

  getScoreBoard = async () => {
    let scoreboardData = await scoreBoard(this.state.leagueId, '7', '15');
    console.log(scoreboardData);
  };

  async componentDidMount() {
    // get list of teams from league reader based on leagueId passed from App
    await this.setState({
      teamsList: await this.getTeams(this.state.leagueId)
    })
  }

  render(){
    const { classes } = this.props;
    const { teamsList } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell numeric>QB</TableCell>
              <TableCell numeric>RB</TableCell>
              <TableCell numeric>WR</TableCell>
              <TableCell numeric>TE</TableCell>
              <TableCell numeric>D/ST</TableCell>
              <TableCell numeric>K</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TeamRow teamsList={teamsList}/>
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
