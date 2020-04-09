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
      <SafeAreaView style={[AppStyle.styleguide.flex1]}>
        <View style={[AppStyle.styleguide.flex1]}>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

export default Root;
