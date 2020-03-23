import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useRest from '../../hooks/useRestClient';
import useStyles from './style';

const LoadingOverlay: React.FunctionComponent = () => {
  const classes = useStyles();
  const { isLoading } = useRest();
  if (isLoading)
    return (
      <div className={classes.overlay}>
        <div className={classes.spinner}>
          <CircularProgress color="primary" />
        </div>
      </div>
    );
  else return null;
};

export default LoadingOverlay;
