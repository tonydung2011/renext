/* global __DEV__ */
import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import RootContainer from '@container/Root';
import AppRoute from '@navigation';

// All redux reducers (rolled into one mega-reducer)
import rootReducer from '@reducer/index';
import rootSaga from '@saga';

// create saga middleware
const Saga = createSagaMiddleware();

// Load middleware
let middleware = [
  Saga, // Allows action creators to return functions (not just plain objects)
];

if (__DEV__) {
  // Dev-only middleware
  middleware = [
    ...middleware,
    createLogger(), // Logs state changes to the dev console
  ];
}

// Init redux store (using the given reducer & middleware)
const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

// Run Saga middleware after apply
Saga.run(rootSaga);

// Wrap App in Redux provider (makes Redux available to all sub-components)
export default function AppContainer() {
  return (
    <Provider store={store}>
      <RootContainer>
        <AppRoute />
      </RootContainer>
    </Provider>
  );
}
