/**
 *
 * LiquidWaveMask
 *
 */

import LiquidWave from '@component/LiquidWave/index';
import {
  revertVector,
  springToEnd,
} from '@component/LiquidWaveMask/animationHelper';
import {
  curveVeritcalHorizontalRate,
  shouldTransitionBorderX,
} from '@component/LiquidWaveMask/constants';
import MaskedView from '@react-native-community/masked-view';
import { AppSize, AppStyle } from '@theme/index';
import React from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { onGestureEvent, useValues } from 'react-native-redash';
import { maxHorizontalRadius, minHorizontalRadius } from './constants';
// import PropTypes from 'prop-types';

const {
  interpolate,
  cond,
  useCode,
  block,
  eq,
  set,
  greaterOrEq,
  multiply,
  add,
  Extrapolate,
  // call,
} = Animated;

const { width: screenWidth } = AppSize.screen;

function LiquidWaveMask({ children }) {
  const [
    translationX,
    translationY,
    y,
    velocityX,
    velocityY,
    absoluteX,
    absoluteY,
    state,
  ] = useValues([
    0,
    0,
    0,
    0,
    0,
    0,
    AppSize.screen.height * 0.7,
    State.UNDETERMINED,
  ]);

  const [
    waveCenterY,
    waveVertRadius,
    sideWidth,
    previousSideWidth,
  ] = useValues([0, minHorizontalRadius * curveVeritcalHorizontalRate, 0, 0]);

  const waveHorRadius = interpolate(velocityX, {
    inputRange: [-screenWidth, 0],
    outputRange: [maxHorizontalRadius, minHorizontalRadius],
    extrapolate: Extrapolate.CLAMP,
  });

  const gestureHandler = onGestureEvent({
    translationX,
    translationY,
    y,
    state,
    velocityX,
    velocityY,
    absoluteX,
    absoluteY,
  });

  const animateWidth = () => {
    return block([
      cond(
        eq(state, State.ACTIVE),
        [set(sideWidth, add(previousSideWidth, revertVector(translationX)))],
        [
          cond(eq(state, State.END), [
            cond(
              greaterOrEq(absoluteX, shouldTransitionBorderX),
              [
                set(
                  sideWidth,
                  springToEnd({
                    width: sideWidth,
                    velocity: velocityX,
                    toValue: 0,
                  }),
                ),
              ],
              [
                set(
                  sideWidth,
                  springToEnd({
                    width: sideWidth,
                    velocity: velocityX,
                    toValue: screenWidth + maxHorizontalRadius,
                  }),
                ),
              ],
            ),
            set(previousSideWidth, sideWidth),
          ]),
        ],
      ),
    ]);
  };

  const animateCurve = () => {
    return block([
      set(
        waveVertRadius,
        add(
          multiply(waveHorRadius, curveVeritcalHorizontalRate),
          multiply(sideWidth, curveVeritcalHorizontalRate),
        ),
      ),
    ]);
  };

  // const debug = () => {
  //   return block([call([waveHorRadius], console.log)]);
  // };

  useCode(
    () =>
      block([
        set(waveCenterY, absoluteY),
        animateCurve(),
        animateWidth(),
        // debug(),
      ]),
    [],
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View>
        <MaskedView
          style={[
            AppStyle.styleguide.fullScreen,
            AppStyle.styleguide.whiteBackground,
          ]}
          maskElement={
            <LiquidWave
              {...{
                waveCenterY,
                waveHorRadius,
                waveVertRadius,
                sideWidth,
              }}
              container={{
                width: screenWidth,
                height: AppSize.screen.height,
              }}
            />
          }>
          {children}
        </MaskedView>
      </Animated.View>
    </PanGestureHandler>
  );
}

LiquidWaveMask.propTypes = {};

export default LiquidWaveMask;
