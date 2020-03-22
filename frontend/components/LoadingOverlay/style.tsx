import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      zIndex: 1000000000,
    },
    spinner: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 2000000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
