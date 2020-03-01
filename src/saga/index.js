import { spawn } from 'redux-saga/effects';

import homeSaga from './home';

export default function* rootSaga() {
  yield spawn(homeSaga);
}
