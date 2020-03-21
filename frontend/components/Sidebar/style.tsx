import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export default makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.common.white,
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			padding: theme.spacing(2),
		},
		drawer: {
			width: 240,
			[theme.breakpoints.up('lg')]: {
				marginTop: 64,
				height: 'calc(100% - 64px)',
			},
		},
		divider: {
			margin: theme.spacing(2, 0),
		},
		nav: {
			marginBottom: theme.spacing(2),
		},
		item: {
			display: 'flex',
			paddingTop: 0,
			paddingBottom: 0,
		},
		button: {
			color: blueGrey[800],
			padding: '10px 8px',
			justifyContent: 'flex-start',
			textTransform: 'none',
			letterSpacing: 0,
			width: '100%',
			fontWeight: theme.typography.fontWeightMedium,
		},
		icon: {
			color: blueGrey[300],
			width: 24,
			height: 24,
			display: 'flex',
			alignItems: 'center',
			marginRight: theme.spacing(1),
		},
		active: {
			color: theme.palette.primary.main,
			fontWeight: theme.typography.fontWeightMedium,
			'& $icon': {
				color: theme.palette.primary.main,
			},
		},
	})
);
