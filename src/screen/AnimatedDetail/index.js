/**
 *
 * AnimatedDetail Container
 *
 */

import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { SharedElement } from 'react-navigation-shared-element';
import { UtilLib, NavigationServiceLib } from '@lib/index';
import { AppConstants } from '@constant/index';
import { AppStyle } from '@theme/index';

class AnimatedDetail extends React.Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    return (
      <View
        style={[
          AppStyle.styleguide.fullScreen,
          AppStyle.styleguide.middleContent,
        ]}>
        <SharedElement
          id={UtilLib.getAnimatedId(
            AppConstants.sharedElementPrefixId.animatedItem,
            item.id,
          )}>
          <Text>{item.name}</Text>
        </SharedElement>
        <Button title="Back" onPress={() => NavigationServiceLib.pop()} />
      </View>
    );
  }
}

AnimatedDetail.propTypes = {};

AnimatedDetail.defaultProps = {};

AnimatedDetail.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  return [
    {
      id: UtilLib.getAnimatedId(
        AppConstants.sharedElementPrefixId.animatedItem,
        item.id,
      ),
      animation: 'fade',
    },
  ];
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AnimatedDetail);
