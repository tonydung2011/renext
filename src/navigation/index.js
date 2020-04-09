/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AnimatedDetail from '@screen/AnimatedDetail/index';
import DetailScreen from '@screen/Detail/index';
import HomeScreen from '@screen/Home/index';
import ListItem from '@screen/ListItem/index';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionLib } from '@lib/index';

const AppNavigator = createSharedElementStackNavigator(
  {
    Home: HomeScreen,
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        cardStyleInterpolator: TransitionLib.screenMoveFromRight,
      },
    },
    ListItem: ListItem,
    AnimatedDetail: AnimatedDetail,
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
    defaultNavigationOptions: {
      cardStyleInterpolator: TransitionLib.screenFadeIn,
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(AppNavigator);
