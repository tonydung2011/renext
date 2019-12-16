/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {useScreens} from 'react-native-screens';
import HomeScreen from '@container/Home';
import DetailScreen from '@container/Detail';

useScreens();

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
