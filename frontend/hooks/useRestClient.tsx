import * as React from 'react';
import RestContext from '../context/RestContext';

const useRest = () => React.useContext(RestContext);
export default useRest;
