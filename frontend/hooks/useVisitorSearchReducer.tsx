import * as React from 'react';
import moment from 'moment';
import { VisitorTableState, VisitorTableAction } from '../types';

const visitorTableReducer = (
  state: VisitorTableState,
  action: VisitorTableAction
) => {
  switch (action.type) {
    case 'setVisitors': {
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

const DEFAULT_STATE: VisitorTableState = {
  skip: 0,
  limit: 50,
  count: 0,
  page: 0,
  rows: [],
  search: {
    name: '',
    firstName: '',
    startDate: moment(new Date().setHours(0, 0, 0, 0)).toISOString(),
    endDate: moment(new Date().setHours(24, 0, 0, 0))
      .subtract(1, 'minute')
      .toISOString(),
  },
};

const SEARCH_STATE_KEY = 'visitor_search_state';

const useSearchStateReducer = () => {
  if (typeof window !== 'undefined') {
    const [state, dispatch] = React.useReducer(
      visitorTableReducer,
      DEFAULT_STATE,
      defaultState => {
        const persisted = localStorage.getItem(SEARCH_STATE_KEY);
        if (persisted)
          return { ...defaultState, search: JSON.parse(persisted) };
        return defaultState;
      }
    );

    React.useEffect(
      () =>
        localStorage.setItem(SEARCH_STATE_KEY, JSON.stringify(state.search)),
      [state.search]
    );
    return { state, dispatch };
  }
  return null;
};

export default useSearchStateReducer;
