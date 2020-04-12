/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { TransitionLib } from '@lib/index';
import AnimatedDetail from '@screen/AnimatedDetail/index';
import ListItem from '@screen/ListItem/index';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { AppColor } from '@theme/index';

const AppNavigator = createSharedElementStackNavigator(
  {
    Home: ListItem,
    AnimatedDetail: {
      screen: AnimatedDetail,
      navigationOptions: {
        containerStyle: {
          backgroundColor: AppColor.shadow,
        },
        cardStyle: {
          backgroundColor: AppColor.dim,
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyleInterpolator: TransitionLib.screenFadeIn,
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(AppNavigator);
