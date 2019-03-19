import { all } from 'redux-saga/effects';
import { appSagas } from './AppSaga';

export default function* rootSaga() {
  yield all([
    ...appSagas,
  ])
}