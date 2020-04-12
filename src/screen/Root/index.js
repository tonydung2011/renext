/**
 *
 * Root Container
 *
 */

import React from 'react';
import { View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { AppStyle } from '@theme/index';

class Root extends React.Component {
  render() {
    return (
      <SafeAreaView
        forceInset={{
          bottom: 'never',
        }}
        style={[
          AppStyle.styleguide.flex1,
          AppStyle.styleguide.whiteBackground,
        ]}>
        <View style={[AppStyle.styleguide.flex1]}>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

export default Root;
