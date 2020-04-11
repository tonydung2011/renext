import { StyleSheet } from 'react-native';
import { AppColor } from '@theme/index';

export default StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: AppColor.primary.regular,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    color: AppColor.white,
  },
});
