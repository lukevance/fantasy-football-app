import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import GridList from '@material-ui/core/GridList';

import HighlightCard from './HighlightCard';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: '10%'
    // flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
});

class HighlightsCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <GridList
        cols={3}
      >
        <HighlightCard
           />
        <HighlightCard
          />
      </GridList>
    );
  };
}

export default withStyles(styles)(HighlightsCardList);