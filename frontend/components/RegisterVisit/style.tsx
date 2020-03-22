import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    contentContainer: {
      padding: theme.spacing(3),
    },
    input: {
      width: '100%',
    },
  })
);
