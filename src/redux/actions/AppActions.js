import * as ActionTypes from '../types';

export const appSampleAction = (count) => {
	return {
		type: ActionTypes.SAMPLE_APP_ACTION,
		payload: count,
	}
};