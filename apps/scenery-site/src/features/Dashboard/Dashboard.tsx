import { FC } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Stays from '../Stays/Stays'
import TabGroup from '../../common/TabGroup/TabGroup'

const Dashboard: FC = () => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={3}>
        <Typography variant="h3" align="center">
          Scenery
        </Typography>
        <TabGroup id="summary-tabs" labels={['Stays', 'Trips']}>
          <Stays />
          <div>"Trips" are coming soon!</div>
        </TabGroup>
      </Grid>
    </Grid>
  )
}

export default Dashboard
