import * as React from 'react';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import useStyles from './style';

const Main: React.FunctionComponent = ({ children }) => {
	const [sidebarOpen, setOpenSidebar] = React.useState<boolean>(false);
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	});

	const classes = useStyles();

	return (
		<div
			className={clsx({
				[classes.root]: true,
				[classes.shiftContent]: isDesktop,
			})}
		>
			<Topbar onMenuClick={() => setOpenSidebar(true)} />
			<Sidebar
				open={sidebarOpen}
				onClose={() => setOpenSidebar(false)}
				variant={isDesktop ? 'permanent' : 'temporary'}
			/>
			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default Main;
