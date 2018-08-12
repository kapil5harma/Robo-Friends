import * as actionTypes from './actionTypes';

const initialStateSearch = {
  searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

const initialStateRobots = {
  loading: false,
  robots: [],
  error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case actionTypes.REQUEST_ROBOTS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload.robots,
        loading: false
      };
    case actionTypes.REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};
