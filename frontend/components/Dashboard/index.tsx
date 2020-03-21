import * as React from 'react';
import { Grid } from '@material-ui/core';
import StatsCard from './StatsCard';
import useStyles from './style';

const Dashboard: React.FunctionComponent = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6} lg={3} xl={3}>
					<StatsCard title="Anzahl Besucher heute" value="200" />
				</Grid>
				<Grid item xs={12} sm={6} lg={3} xl={3}>
					<StatsCard title="Anzahl Besucher aktuell" value="3" />
				</Grid>
				<Grid item xs={12} sm={6} lg={3} xl={3}>
					<StatsCard title="Anzahl abgelehnt" value="12" />
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
