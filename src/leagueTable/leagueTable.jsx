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

// function BasicTable(props) {
class BasicTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      leagueId: '286565'
    };
    this.getScoreBoard = this.getScoreBoard.bind(this);
    this.getTeams = this.getTeams.bind(this);
  }

  getTeams = async (leagueId) => {
    let teamList = await leagueReader(this.state.leagueId);
    console.log(teamList);
    return teamList.teams;
  }

  getScoreBoard = async () => {
    let scoreboardData = await scoreBoard(this.state.leagueId, '7', '15');
    console.log(scoreboardData);
  };

  componentWillMount() {
    let {leagueId} = this.state;
    let teams = this.getTeams(leagueId);
    this.setState({
      teamList: teams,
    });
  }

  render(){
    const { classes } = this.props;
    const {teamList} = this.state;
    console.log('inside render');
    console.log(teamList);
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
            {teamList.map(team => {
              return (
                <TeamRow teamData={team} />
                // <TableRow key={n.id}>
                //   <TableCell>{n.name}</TableCell>
                //   <TableCell numeric>{n.qb}</TableCell>
                //   <TableCell numeric>{n.rb}</TableCell>
                //   <TableCell numeric>{n.wr}</TableCell>
                //   <TableCell numeric>{n.te}</TableCell>
                //   <TableCell numeric>{n.d}</TableCell>
                //   <TableCell numeric>{n.k}</TableCell>
                // </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Button 
              raised 
              onClick={function(){
                  this.getScoreBoard();
              }}
          >
              Get Data
        </Button>
      </Paper>
    );
  }
  
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);
