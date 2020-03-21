import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			minHeight: 'fit-content',
			padding: theme.spacing(1),
		},
		avatar: {
			width: 60,
			height: 60,
		},
		name: {
			marginTop: theme.spacing(1),
		},
	})
);
