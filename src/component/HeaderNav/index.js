/**
 *
 * HeaderNav
 *
 */

import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import { AppColor } from '@theme/index';
// import PropTypes from 'prop-types';

function HeaderNav({ title }) {
  return (
    <View style={[style.container]}>
      <View>
        <SIcon name="menu" size={17} color={AppColor.white} />
      </View>
      <Text style={[style.title]}>{title}</Text>
    </View>
  );
}

HeaderNav.propTypes = {};

export default HeaderNav;
