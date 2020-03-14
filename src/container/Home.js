/**
 *
 * HomeScreen Container
 *
 */

import { attachReducer, dispatchAction } from '@redux-dynostore/core';
import dynamic from '@redux-dynostore/react-redux';
import { runSaga } from '@redux-dynostore/redux-saga';
import { mockAction, sagaAction } from '@redux/home/action';
import { homeReducer } from '@redux/home/reducer';
import homeSaga from '@redux/home/saga';
import { selectCount as selectHomeCount } from '@redux/home/selector';
import { selectCount } from '@redux/root/selector';
import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{this.props.numberHome}</Text>
        <LoginButton
          onLoginFinished={(err, status) => {
            console.log('err', err);
            console.log('status', status);
          }}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Dispatch simple action"
          onPress={() => this.props.sagaAction()}
        />
        <Button
          title="increase count"
          onPress={() => this.props.mockAction()}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  numberRoot: selectCount(),
  numberHome: selectHomeCount(),
});
const mapDispatchToProps = dispatch => ({
  mockAction: () => dispatch(mockAction()),
  sagaAction: () => dispatch(sagaAction()),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const dynamicComponent = dynamic(
  'home',
  attachReducer(homeReducer),
  runSaga(homeSaga),
  dispatchAction(mockAction()),
);

export default compose(dynamicComponent, withConnect)(HomeScreen);
