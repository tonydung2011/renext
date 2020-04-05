/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AnimatedDetail from '@screen/AnimatedDetail/index';
import DetailScreen from '@screen/Detail';
import HomeScreen from '@screen/Home';
import ListItem from '@screen/ListItem/index';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TransitionLib } from '@lib/index';

const AppNavigator = createSharedElementStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    ListItem: ListItem,
    AnimatedDetail: AnimatedDetail,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',
    // transitionConfig: () => TransitionLib.springyFadeIn(),
  },
);

export default createAppContainer(AppNavigator);
