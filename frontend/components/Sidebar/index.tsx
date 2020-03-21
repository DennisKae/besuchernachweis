import * as React from 'react';
import Link from 'next/link';
import { Drawer, Divider, List, ListItem, Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {
  SidebarProps,
  SidebarNavProps,
  SidebarListItemProps,
} from '../../types';
import Profile from '../Profile';
import useStyles from './style';

const SidebarNav: React.FunctionComponent<SidebarNavProps> = ({ items }) => {
  const classes = useStyles();
  return (
    <List className={classes.nav}>
      {items.map(item => (
        <ListItem className={classes.item} disableGutters key={item.title}>
          <Link href={item.link.href} as={item.link.as}>
            <Button className={classes.button}>
              <div className={classes.icon}>{item.icon}</div>
              {item.title}
            </Button>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  open,
  variant,
  onClose,
}) => {
  const classes = useStyles();

  const items: Array<SidebarListItemProps> = [
    {
      title: 'Besucher abmelden',
      link: { href: '/' },
      icon: <DashboardIcon />,
    },

    {
      title: 'Besucher hinzufügen',
      link: { href: '/visitor/create' },
      icon: <PersonAddIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <Profile name="Stephan Gilli" role="Angestellter" />
        <Divider />
        <SidebarNav items={items} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
