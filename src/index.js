import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from '@container/Root';
import AppRoute from '@navigation';
import store from '@bootstrap/store';

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
