import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from "material-ui/Button";
import scoreBoard from './scoreboardReader';


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

let id = 0;
function createData(name, qb, rb, wr, te, d, k) {
  id += 1;
  return { id, name, qb, rb, wr, te, d, k };
}

const getScoreBoard = async () => {
    // let scoreboardData = await scoreBoard('286565', '7', '15');
    console.log(scoreBoard);
};

// getScoreBoard();

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable(props) {
  const { classes } = props;

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
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.qb}</TableCell>
                <TableCell numeric>{n.rb}</TableCell>
                <TableCell numeric>{n.wr}</TableCell>
                <TableCell numeric>{n.te}</TableCell>
                <TableCell numeric>{n.d}</TableCell>
                <TableCell numeric>{n.k}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button 
            raised 
            onClick={function(){
                getScoreBoard();
            }}
        >
            Get Data
      </Button>
    </Paper>
  );
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);
