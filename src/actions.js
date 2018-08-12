import * as actionTypes from './actionTypes';

export const setSearchField = text => {
  return {
    type: actionTypes.CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestRobots = () => {
  return dispatch => {
    dispatch(requestRobotsStart());
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(users => {
        dispatch(requestRobotsSuccess(users));
      })
      .catch(err => dispatch(requestRobotsFail(err)));
  };
};

export const requestRobotsStart = () => {
  return {
    type: actionTypes.REQUEST_ROBOTS_START
  };
};

export const requestRobotsSuccess = users => {
  let fetchedRobots = [];
  for (let key in users) {
    fetchedRobots.push({
      ...users[key]
    });
  }
  return {
    type: actionTypes.REQUEST_ROBOTS_SUCCESS,
    payload: { robots: fetchedRobots }
  };
};

export const requestRobotsFail = err => {
  return {
    type: actionTypes.REQUEST_ROBOTS_FAILED,
    payload: { error: err }
  };
};
