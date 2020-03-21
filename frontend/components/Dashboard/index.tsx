import * as React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import moment from 'moment';
import Table from '../Table';
import StatsCard from './StatsCard';
import useStyles from './style';

const Dashboard: React.FunctionComponent = () => {
  const [startDate, setStartDate] = React.useState(
    moment().format('YYYY-MM-DD')
  );
  const [endDate, setEndDate] = React.useState(moment().format('YYYY-MM-DD'));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Dashboard</Typography>
          <Typography variant="h6">Besucherübersicht</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container justify="flex-end">
            <TextField
              style={{ paddingRight: '12px' }}
              label="Startdatum"
              type="date"
              defaultValue={startDate}
              onChange={event => setStartDate(event.target.value)}
            />
            <TextField
              label="Enddatum"
              type="date"
              defaultValue={endDate}
              onChange={event => setEndDate(event.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <StatsCard title="Anzahl Besucher im Zeitraum" value="200" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <StatsCard title="Anzahl Besucher aktuell" value="3" />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Table
            rows={[
              {
                id: '1223',
                startDate: '20.03.2020',
                endDate: '20.03.2020',
                name: 'Gilli',
                firstName: 'Stephan',
                email: 'gilli.stephan@gmail.com',
              },
              {
                id: '456',
                startDate: '20.03.2020',
                endDate: '20.03.2020',
                name: 'Gilli',
                firstName: 'Stephan',
                email: 'gilli.stephan@gmail.com',
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
