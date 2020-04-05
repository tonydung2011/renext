/**
 *
 * AnimatedItem Component
 *
 */

import React from 'react';
import { Text, View } from 'react-native';
import { AppStyle } from '@theme/index';
import { SharedElement } from 'react-navigation-shared-element';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationServiceLib, UtilLib } from '@lib/index';
import { AppConstants } from '@constant/index';

function AnimatedItem({ style, row, isLast }) {
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationServiceLib.navigate('AnimatedDetail', { item: row })
      }>
      <View
        style={[
          style,
          AppStyle.styleguide.columnFlex,
          AppStyle.styleguide.pad10,
          !isLast && AppStyle.styleguide.bottomBorder,
        ]}>
        <View
          style={[
            AppStyle.styleguide.flex1,
            AppStyle.styleguide.justifyContent,
          ]}>
          <SharedElement
            id={UtilLib.getAnimatedId(
              AppConstants.sharedElementPrefixId.animatedItem,
              row.id,
            )}>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {row.name}
            </Text>
          </SharedElement>
        </View>
        <View
          style={[
            AppStyle.styleguide.flex1,
            AppStyle.styleguide.justifyContent,
          ]}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {row.description}
          </Text>
        </View>
        <View
          style={[
            AppStyle.styleguide.flex1,
            AppStyle.styleguide.justifyContent,
          ]}>
          <Text>{row.datetime.format('DD MM YYYY')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

AnimatedItem.propTypes = {};

export default AnimatedItem;
