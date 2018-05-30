import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

class MyTeamPageGrid extends Component {
    render(){
        return (
            <div>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                  <Paper >First scorecard</Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper >Second scorecard</Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper >third scorecard</Paper>
                </Grid>
              </Grid>
            </div>
          );
    }
}

export default MyTeamPageGrid;