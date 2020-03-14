import { takeEvery, put } from 'redux-saga/effects';
import { REDUX_HOME_SAGA_ACTION } from '@redux/home/constants';
import { mockAction } from '@redux/home/action';

export function* testSaga() {
  console.log('abc');
  yield put(mockAction());
}

export default function* defaultSaga() {
  console.log('mount saga');
  yield takeEvery(REDUX_HOME_SAGA_ACTION, testSaga);
}
