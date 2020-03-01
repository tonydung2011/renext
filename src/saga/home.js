import { takeEvery, put } from 'redux-saga/effects';

import { nullAction } from '@action/ui/home';

export function* testSaga() {
  console.log('hit');

  yield put(nullAction());
}

export default function* defaultSaga() {
  yield takeEvery('home/defaultaction', testSaga);
}
