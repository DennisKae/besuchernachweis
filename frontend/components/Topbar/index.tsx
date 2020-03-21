import * as React from 'react';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import { TopbarProps } from '../../types';
import useStyles from './style';

const Topbar: React.FunctionComponent<TopbarProps> = ({ onMenuClick }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Hidden mdDown>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
