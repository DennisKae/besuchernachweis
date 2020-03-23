import * as React from 'react';
import Client from '../rest-client';

type ContextProps = {
  client: Client;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
};

const RestContext = React.createContext<ContextProps>({
  client: new Client(''),
  isLoading: false,
  setIsLoading: () => null,
  setHasError: () => null,
  hasError: false,
});

export const RestProvider: React.FC<{ url: string }> = ({ url, children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const client = new Client(url);

  return (
    <RestContext.Provider
      value={{ client, isLoading, setIsLoading, setHasError, hasError }}
    >
      {children}
    </RestContext.Provider>
  );
};

export default RestContext;
