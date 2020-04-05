import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from '@screen/Root';
import AppRoute from '@navigation/index';
import store from '@bootstrap/store';
import { NavigationServiceLib } from '@lib/index';

// Wrap App in Redux provider (makes Redux available to all sub-components)
export default function AppContainer() {
  return (
    <Provider store={store}>
      <RootContainer>
        <AppRoute
          ref={ref => {
            NavigationServiceLib.setTopLevelNavigator(ref);
          }}
        />
      </RootContainer>
    </Provider>
  );
}
