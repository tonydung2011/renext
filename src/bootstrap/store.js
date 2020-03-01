import rootReducer from '@reducer/index';
import rootSaga from '@saga/index';
import { applyMiddleware, compose, createStore } from 'redux';
import Offline from './offline';
import Saga from './saga';

const middleware = applyMiddleware(Saga, Offline.offlineMiddleware);
const enhancer = [Offline.enhanceStore, middleware];

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
