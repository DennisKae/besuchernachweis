import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: 'none',
    },
    flexGrow: {
      flexGrow: 1,
    },
    signOutButton: {
      marginLeft: theme.spacing(1),
    },
  })
);
