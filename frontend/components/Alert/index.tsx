import * as React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import useRestClient from '../../hooks/useRestClient';

const MyAlert: React.FunctionComponent = () => {
  const { hasError, setHasError } = useRestClient();

  if (hasError) {
    setTimeout(() => {
      setHasError(false);
    }, 5000);
    return (
      <Alert severity="error" onClose={() => setHasError(false)}>
        <AlertTitle>Fehler</AlertTitle>
        Es ist ein unerwarteter Fehler aufgetreten
      </Alert>
    );
  }
  return null;
};

export default MyAlert;
