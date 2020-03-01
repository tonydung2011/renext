/**
 *
 * HomeScreen Container
 *
 */

import { defaultAction } from '@action/ui/home';
import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { increase } from '@action/ui/home';

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
        <Text style={styles.instructions}>{this.props.number}</Text>
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
          onPress={() => this.props.defaultAction()}
        />
        <Button title="increase count" onPress={() => this.props.increase()} />
      </View>
    );
  }
}

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

const mapStateToProps = state => ({
  number: state.ui.home.number,
});
const mapDispatchToProps = dispatch => ({
  defaultAction: () => dispatch(defaultAction()),
  increase: () => dispatch(increase()),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeScreen);
