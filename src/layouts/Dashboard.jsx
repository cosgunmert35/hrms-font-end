import React from 'react'
import { Grid } from 'semantic-ui-react'

import JobAdvertisementsList from '../pages/JobAdvertisementsList'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {3}></Grid.Column>
                    <Grid.Column width = {13}>
                        <JobAdvertisementsList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}
