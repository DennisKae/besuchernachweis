import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';

const LoadingOverlay: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <div className={classes.spinner}>
        <CircularProgress color="primary" />
      </div>
    </div>
  );
};

export default LoadingOverlay;
