import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { StatsCardProps } from '../../../types';
import useStyles from './style';

const StatsCard: React.FunctionComponent<StatsCardProps> = ({
	title,
	value,
}) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="body2" className={classes.title}>
					{title}
				</Typography>
				<Typography variant="h4">{value}</Typography>
			</CardContent>
		</Card>
	);
};

export default StatsCard;
