import { put, takeEvery, take, delay } from 'redux-saga/effects';
import * as ActionTypes from '../redux/types';

function* counterIncrementSaga() {
  yield put({type: ActionTypes.INCREMENT_COUNT, payload: { value: 1}});
}

function* counterDecrementSaga() {
  yield put({type: ActionTypes.DECREMENT_COUNT, payload: {value: 1}});
}

export const appSagas = [
  takeEvery(ActionTypes.INCREMENT_APP_COUNT, counterIncrementSaga),
  takeEvery(ActionTypes.DECREMENT_APP_COUNT, counterDecrementSaga),
];