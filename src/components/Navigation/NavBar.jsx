import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//pages and components
// import MyTeamTable from '../MyTeam/MyTeamTable';
import MyTeamPage from '../MyTeam/MyTeamContainer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends Component {
  state = {
    leagueId: '286565',
    teamId: 7
  }

  render() {
    const { classes } = this.props;
    const { leagueId, teamId } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              ESPN Fantasy Football Insights
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <MyTeamPage
          leagueId={leagueId}
          teamId={teamId}
        />
      </div>
    )
  }
}


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);