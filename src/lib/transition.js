// @flow
import { Easing, Animated } from 'react-native';
import { AppSize } from '@theme/index';

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

const screenFadeIn = ({ current: { progress } }) => {
  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  return {
    cardStyle: {
      opacity,
    },
  };
};

const screenMoveFromRight = ({ current: { progress } }) => {
  const marginLeft = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [AppSize.screen.width, 0],
  });
  return {
    cardStyle: {
      transform: [
        {
          translateX: marginLeft,
        },
      ],
    },
  };
};

export default {
  fadeIn,
  springyFadeIn,
  screenFadeIn,
  screenMoveFromRight,
};
