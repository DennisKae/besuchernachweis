import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f4f6f8',
      paddingTop: 56,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64,
      },
    },
    shiftContent: {
      paddingLeft: 240,
    },
    content: {
      height: '100%',
    },
  })
);
