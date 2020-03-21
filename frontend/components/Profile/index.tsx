import * as React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { ProfileProps } from '../../types';
import useStyles from './style';

const Profile: React.FunctionComponent<ProfileProps> = ({ name, role }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar} />
			<Typography className={classes.name} variant="body1">
				{name}
			</Typography>
			{role && <Typography variant="body2">{role}</Typography>}
		</div>
	);
};

export default Profile;
