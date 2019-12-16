/**
 *
 * Root Container
 *
 */

import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';

// import AppRoute from '@navigation';

class Root extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {this.props.children}
      </View>
    );
  }
}

Root.propTypes = {};

Root.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Root);
