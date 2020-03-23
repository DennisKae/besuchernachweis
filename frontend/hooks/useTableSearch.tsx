import * as React from 'react';
import { TableState, TableAction } from '../types';

const createTableReducer = <R,>() => (
  state: TableState<R>,
  action: TableAction<R>
) => {
  switch (action.type) {
    case 'setRows': {
      if (action.payload.count)
        return {
          ...state,
          rows: action.payload.rows,
          count: action.payload.count,
        };
      else return { ...state, rows: action.payload.rows };
    }
    case 'changePage':
      return { ...state, page: action.payload.page, skip: action.payload.skip };
    case 'changeRowsPerPage':
      return { ...state, limit: action.payload.limit };
    case 'setSearch': {
      return { ...state, search: action.payload };
    }

    default:
      return state;
  }
};

function useSearchStateReducer<R>() {
  const tableReducer = createTableReducer<R>();
  const [state, dispatch] = React.useReducer(tableReducer, {
    skip: 0,
    limit: 50,
    count: 0,
    page: 0,
    rows: [],
    search: null,
  });

  return { state, dispatch };
}

export default useSearchStateReducer;
