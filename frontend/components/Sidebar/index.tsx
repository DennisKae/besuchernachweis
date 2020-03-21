import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InputIcon from '@material-ui/icons/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {
  SidebarProps,
  SidebarNavProps,
  SidebarListItemProps,
} from '../../types';
import useTranslations from '../../hooks/useTranslations';
import { locales } from '../../utils/locales';
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
  const { locale, t } = useTranslations();
  const router = useRouter();

  const items: Array<SidebarListItemProps> = [
    {
      title: 'Dashboard',
      link: {
        href: `/[locale]`,
        as: `/${locale}`,
      },
      icon: <DashboardIcon />,
    },
    {
      title: t('navigation-register-visitor'),
      link: {
        href: `/[locale]/visitor/register`,
        as: `/${locale}/visitor/register`,
      },
      icon: <PersonAddIcon />,
    },
    {
      title: t('navigation-cancle-visitor'),
      link: {
        href: `/[locale]/visitor/cancle`,
        as: `/${locale}/visitor/cancle`,
      },
      icon: <InputIcon />,
    },
  ];

  const handleLocaleChange = React.useCallback(
    (val: string) => {
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${val}`));
    },
    [router]
  );

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <Select
          value={locale}
          onChange={event => handleLocaleChange(event.target.value as string)}
        >
          {locales.map(locale => (
            <MenuItem key={locale} value={locale}>
              {locale.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
        <Profile name="Stephan Gilli" role="Angestellter" />
        <Divider />
        <SidebarNav items={items} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
