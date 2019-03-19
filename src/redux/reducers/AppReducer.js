import * as ActionTypes from '../types';

const INITIAL_STATE = {
  count: 1,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_APP_COUNT:
      return {...state, count: state.count + 1};
    case ActionTypes.DECREMENT_APP_COUNT:
      return {...state, count: state.count - 1};
    default:
      return state
  }
};