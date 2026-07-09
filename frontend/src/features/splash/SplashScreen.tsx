/**
 * ============================================================================
 * SplashScreen
 * ============================================================================
 *
 * Displays the branded splash experience while the application initializes.
 *
 * Responsibilities:
 *
 * ✓ Shows the Pamoja logo
 * ✓ Displays application name
 * ✓ Shows tagline
 * ✓ Indicates loading progress
 * ✓ Navigates when initialization completes
 *
 * ============================================================================
 */

import React, { useEffect, useRef } from 'react';

import {
  Animated,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { AppLoadingSpinner } from '@/components/ui/LoadingSpinner';
import { AppText } from '@/components/ui/Text';

import { Colors, Spacing } from '@/theme';

import { useAppInitialization } from './hooks/useAppInitialization';

export function SplashScreen() {
  const { isReady } = useAppInitialization();

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (isReady) {
      router.replace('/(main)');
    }
  }, [isReady]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity,
          },
        ]}
      >
        <Image
          source={require('../../../assets/splash/splash-icon.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <AppText
          variant="h1"
          color="white"
          style={styles.title}
        >
          Pamoja Chama
        </AppText>

        <AppText
          variant="body"
          color="white"
          style={styles.subtitle}
        >
          Building stronger communities together.
        </AppText>

        <AppLoadingSpinner
          label="Preparing your workspace..."
          style={styles.spinner}
          labelColor = "white"
          spinnerColor="white"
        />
      </Animated.View>
    </View>
  );
}

SplashScreen.displayName = 'SplashScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },

  content: {
    width: '100%',
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: Spacing.xl,
  },

  title: {
    textAlign: 'center',
  },

  subtitle: {
    marginTop: Spacing.sm,
    textAlign: 'center',
  },

  spinner: {
    marginTop: Spacing.xxxl,
  },
});