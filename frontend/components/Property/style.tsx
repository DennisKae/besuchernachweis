import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
      },
    },
    paper: {
      padding: theme.spacing(5),
      position: 'relative',
    },

    panelDetails: {
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '40px',
      },
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    oddPanelDetail: {
      background: grey[200],
    },
    input: {
      width: '100%',
      minWidth: '250px',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);
