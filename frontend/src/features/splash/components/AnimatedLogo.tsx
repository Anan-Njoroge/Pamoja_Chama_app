/**
 * ============================================================================
 * AnimatedLogo
 * ============================================================================
 *
 * Displays the application logo with a simple entrance animation.
 *
 * ============================================================================
 */

import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Assets } from '@/constants/Assets';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export interface AnimatedLogoProps {
  size?: number;
}

export function AnimatedLogo({
  size = 160,
}: AnimatedLogoProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.85);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 700,
      easing: Easing.out(Easing.ease),
    });

    scale.value = withTiming(1, {
      duration: 700,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedImage
      source={Assets.splashLogo}
      resizeMode="contain"
      style={[
        styles.logo,
        {
          width: size,
          height: size,
        },
        animatedStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});

AnimatedLogo.displayName = 'AnimatedLogo';