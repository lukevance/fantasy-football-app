import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import HighlightCard from './HighlightCard';
import MainTable from './MyTeamTable';

class MainContentContainer extends Component {

    render() {
        const { teamId, leagueId } = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item md={4}>
                    <HighlightCard
                        teamId={teamId}
                        leagueId={leagueId}
                    />
                </Grid>
                <Grid item md={4}>
                    <HighlightCard
                        teamId={teamId}
                        leagueId={leagueId}
                    />
                </Grid>
                <Grid item md={12}>
                <MainTable
                    teamId={teamId}
                    leagueId={leagueId}
                />
                </Grid>
            </Grid>
        );
    }
}

export default MainContentContainer;