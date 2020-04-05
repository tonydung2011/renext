// @flow
import { Easing, Animated } from 'react-native';

function fadeIn(duration = 400, spring = false) {
  const transitionSpec = spring
    ? {
        timing: Animated.spring,
        tension: 10,
        useNativeDriver: true,
      }
    : {
        duration,
        easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
        timing: Animated.timing,
        useNativeDriver: true,
      };

  return {
    transitionSpec,
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      return { opacity };
    },
  };
}

export function springyFadeIn() {
  const transitionSpec = {
    timing: Animated.spring,
    tension: 10,
    useNativeDriver: true,
  };

  return {
    transitionSpec,
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      return { opacity };
    },
  };
}

export default {
  fadeIn,
  springyFadeIn,
};
