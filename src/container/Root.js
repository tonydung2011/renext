/**
 *
 * Root Container
 *
 */

import React from 'react';
import { View } from 'react-native';

// import AppRoute from '@navigation';

class Root extends React.Component {
  render() {
    return <View style={{ flex: 1 }}>{this.props.children}</View>;
  }
}

export default Root;
