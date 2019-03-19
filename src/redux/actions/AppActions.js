import * as ActionTypes from '../types';

export const incrementCount = () => {
	return {
		type: ActionTypes.INCREMENT_APP_COUNT,
	}
};

export const decrementCount = () => {
	return {
		type: ActionTypes.DECREMENT_APP_COUNT,
	}
};