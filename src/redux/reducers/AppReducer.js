import * as ActionTypes from '../types';

const INITIAL_STATE = {
  count: 0,
  title: 'React Native Boiler Plate',
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    default: {
      return state;
    }
  }
};