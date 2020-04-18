import {
  defaultSpringConfig,
  maxDist,
} from '@component/LiquidWaveMask/constants';
import Animated from 'react-native-reanimated';
import { snapPoint, spring } from 'react-native-redash';

const {
  block,
  greaterOrEq,
  cond,
  interpolate,
  multiply,
  divide,
  Clock,
} = Animated;

const followPointer = translationX => {
  return translationX;
};

const progresSnapoint = (translationX, velocityX, gestureState) => {
  const gestureProgress = block([
    cond(
      greaterOrEq(translationX, 0),
      interpolate(translationX, {
        inputRange: [0, maxDist],
        outputRange: [0, 1],
      }),
      interpolate(translationX, {
        inputRange: [-maxDist, 0],
        outputRange: [0, 1],
      }),
    ),
  ]);
  const veclocityRate = cond(
    greaterOrEq(velocityX, 0),
    divide(velocityX, maxDist),
    divide(multiply(-1, velocityX), maxDist),
  );
  const snapped = snapPoint(gestureProgress, velocityX, [0, 1]);
};

const springToEnd = ({ width, velocity, toValue }) => {
  const clock = new Clock();
  return spring({
    from: width,
    to: toValue,
    velocity,
    clock,
    config: defaultSpringConfig,
  });
};

const revertVector = animatedValue => multiply(animatedValue, -1);

const getAbsoluteValue = animatedValue =>
  cond(
    greaterOrEq(animatedValue, 0),
    animatedValue,
    multiply(animatedValue, -1),
  );

export {
  followPointer,
  revertVector,
  springToEnd,
  getAbsoluteValue,
  progresSnapoint,
};
