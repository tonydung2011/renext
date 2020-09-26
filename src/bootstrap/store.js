import rootSaga from '@redux/root/saga';
import { applyMiddleware, compose, createStore } from 'redux';
import Offline from './offline';
import Reducer from './reducer';
import Saga from './saga';

const middleware = applyMiddleware(Saga, Offline.offlineMiddleware);
const enhancer = [middleware, Offline.enhanceStore];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  Offline.enhanceReducer(Reducer),
  {},
  compose(...enhancer),
);

Saga.run(rootSaga);
store.saga = Saga;

console.log('store', store);

export default store;
