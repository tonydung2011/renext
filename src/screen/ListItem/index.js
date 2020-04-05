/**
 *
 * ListItem Container
 *
 */

import AnimatedItem from '@component/AnimatedItem/index';
import { mockAction, sagaAction } from '@redux/home/action';
import getModule from '@redux/home/module';
import { selectCount as selectHomeCount } from '@redux/home/selector';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { LargeList } from 'react-native-largelist-v3';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import data from './data';

const homeIdentifier = 'home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: '#EEE',
  },
});

class ListItem extends Component {
  _renderIndexPath = ({ row }) => {
    return <AnimatedItem row={data[row]} isLast={row === data.length} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <LargeList
          style={styles.container}
          data={[{ items: data }]}
          heightForIndexPath={() => 100}
          renderIndexPath={this._renderIndexPath}
        />
      </View>
    );
  }
}

ListItem.propTypes = {};

ListItem.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  numberHome: selectHomeCount(),
});

const mapDispatchToProps = dispatch => ({
  sagaAction: () => dispatch(sagaAction()),
  mockAction: () => dispatch(mockAction()),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  getModule({ identifier: homeIdentifier }),
  withConnect,
)(ListItem);
