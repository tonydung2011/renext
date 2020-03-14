import { rootReducer } from '@redux/root/reducer';
import rootSaga from '@redux/root/saga';
import { applyMiddleware, compose, createStore } from 'redux';
import dynostore, { dynamicReducers } from '@redux-dynostore/core';
import { dynamicSagas } from '@redux-dynostore/redux-saga';
import Offline from './offline';
import Saga from './saga';

const middleware = applyMiddleware(Saga, Offline.offlineMiddleware);
const enhancer = [
  Offline.enhanceStore,
  middleware,
  dynostore(dynamicReducers(), dynamicSagas(Saga)),
];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  Offline.enhanceReducer(rootReducer),
  {},
  compose(...enhancer),
);

Saga.run(rootSaga);

export default store;
