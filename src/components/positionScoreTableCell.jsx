import React, { Component } from 'react';
import { TableCell } from 'material-ui/Table';

class PositionScoreCell extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {position, score} = this.props;
        return(
            <TableCell numeric key={position}>{score}</TableCell> 
        )
    }
}

export default PositionScoreCell;