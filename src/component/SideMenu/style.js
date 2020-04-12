import { StyleSheet } from 'react-native';
import { AppSize } from '@theme/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: AppSize.screen.width,
    height: AppSize.screen.height,
  },
  screenWrapper: {
    zIndex: 1,
  },
  overlay: {
    zIndex: 1000,
  },
});
