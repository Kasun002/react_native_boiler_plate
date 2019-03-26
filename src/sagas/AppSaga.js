import { put, takeEvery, take, delay, call } from 'redux-saga/effects';
import * as ActionTypes from '../redux/types';
import API from '../api';
import { ApiEndPoint, ApiMethod } from '../api/ApiConstants';

function* counterIncrementSaga() {
  try {
    // sample api call
    // response = yield call(API(ApiEndPoint.GET_USERS, ApiMethod.GET));
    // console.log('>>>> response >>', response);
    yield put({type: ActionTypes.INCREMENT_COUNT, payload: { value: 1}});
  } catch (error) {
    console.log('>> error >>', error);
  }
}

function* counterDecrementSaga() {
  yield put({type: ActionTypes.DECREMENT_COUNT, payload: {value: 1}});
}

export const appSagas = [
  takeEvery(ActionTypes.INCREMENT_APP_COUNT, counterIncrementSaga),
  takeEvery(ActionTypes.DECREMENT_APP_COUNT, counterDecrementSaga),
];