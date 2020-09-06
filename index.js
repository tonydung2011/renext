/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppEnv from './app.json';

import App from './src';

AppRegistry.registerComponent(AppEnv.name, () => App);
