import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import HighlightCard from '../HighlightCard/HighlightCard';
import MyTeamTable from './MyTeamTable';
import PositionSummary from './PositionSummaryTable';

class MainContentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            highlights: ['avg', 'opp-mgmt', 'total-starters']
        }
    }
    render() {
        const { teamId, leagueId } = this.props;
        return (
            <Grid 
                container 
                spacing={16}
                style={{margin:0}}
            >
            {this.state.highlights.map(hlt => {
                return (
                    <Grid item md={3}>
                        <HighlightCard
                            teamId={teamId}
                            leagueId={leagueId}
                            type={hlt}
                        />
                    </Grid>
                );
            })}
                {/* <Grid item md={12}>
                    <MyTeamTable
                        teamId={teamId}
                        leagueId={leagueId}
                    />
                </Grid> */}
                <Grid item md={12}>
                    <PositionSummary
                        teamId={teamId}
                        leagueId={leagueId}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default MainContentContainer;