import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';

import HighlightCard from './HighlightCard';

class HighlightsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <GridList cols={3}>
                <HighlightCard />
                <HighlightCard />
            </GridList>
        );
    };
}

export default HighlightsList;