import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
    },
    content: {
      alignItems: 'center',
      display: 'flex',
    },
    title: {
      fontWeight: 400,
    },
  })
);
