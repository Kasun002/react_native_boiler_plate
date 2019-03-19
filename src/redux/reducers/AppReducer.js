import { createReducer } from '../../lib/handlers/ReduxHandler';
import * as ActionTypes from '../types';

const INITIAL_STATE = {
  count: 1,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SAMPLE_APP_ACTION:
      return {...state, count: state.count + action.payload};
    default:
      return state
  }
};