/**
 *
 * ListItem Container
 *
 */

import AnimatedItem from '@component/AnimatedItem/index';
import HeaderNav from '@component/HeaderNav/index';
import WaterFallList from '@component/WaterFallList/index';
import { mockAction, sagaAction } from '@redux/home/action';
import getModule from '@redux/home/module';
import { selectCount as selectHomeCount } from '@redux/home/selector';
import { AppSize, AppStyle } from '@theme/index';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import data from './data';
import style from './style';

const homeIdentifier = 'home';

class ListItem extends Component {
  _renderIndexPath = (item, index) => {
    return <AnimatedItem row={item} />;
  };

  state = {
    search: '',
  };

  render() {
    return (
      <View style={[AppStyle.styleguide.flex1]}>
        <HeaderNav
          title="Home"
          isWhite
          useSearch
          searchText={this.state.search}
          onChangeSearch={text => {
            this.setState({ search: text });
          }}
        />
        <View style={[AppStyle.styleguide.padx15, style.waterfallList]}>
          <WaterFallList
            data={data}
            itemHeight={250}
            itemWidth={(AppSize.screen.width - 30) / 2}
            renderItem={this._renderIndexPath}
          />
        </View>
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
