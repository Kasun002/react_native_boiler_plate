import * as ActionTypes from '../types';

const INITIAL_STATE = {
  count: 0,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  const newState = {...state}
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNT:
      return { newState, count: state.count + 1 };
    case ActionTypes.DECREMENT_COUNT:
      return { newState, count: state.count - 1 };
    default:
      return newState
  }
};