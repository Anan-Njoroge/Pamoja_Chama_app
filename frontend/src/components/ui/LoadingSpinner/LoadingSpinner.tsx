/**
 * ============================================================================
 * AppLoadingSpinner
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Displays a loading indicator while data is being fetched or processed.
 *
 * Instead of using React Native's ActivityIndicator directly throughout
 * the application, every screen should use AppLoadingSpinner.
 *
 * BENEFITS
 * --------
 * ✓ Consistent appearance
 * ✓ Brand colours
 * ✓ Optional loading message
 * ✓ Full-screen mode
 * ✓ Easy to extend with animations later
 *
 * ============================================================================
 */

import React from 'react';

import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { AppText } from '@/components/ui';

import {
  Colors,
  Spacing,
} from '@/theme';

export type LoadingSize =
  | 'small'
  | 'large';

interface AppLoadingSpinnerProps {

  /**
   * Optional loading message.
   */
  label?: string;

  /**
   * Spinner size.
   */
  size?: LoadingSize;

  /**
   * Center the spinner on the entire screen.
   */
  fullScreen?: boolean;

  /**
   * Optional custom styling.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Used for testing.
   */
  testID?: string;
}

export function AppLoadingSpinner({
  label,
  size = 'large',
  fullScreen = false,
  style,
  testID,
}: AppLoadingSpinnerProps) {

  return (

    <View
      testID={testID}
      style={[
        styles.container,

        fullScreen && styles.fullScreen,

        style,
      ]}
    >

      <ActivityIndicator
        size={size}
        color={Colors.primary}
      />

      {label && (

        <AppText
          variant="small"
          color="textSecondary"
          style={styles.label}
        >
          {label}
        </AppText>

      )}

    </View>

  );
}

const styles = StyleSheet.create({

  container: {

    justifyContent: 'center',

    alignItems: 'center',
  },

  fullScreen: {

    flex: 1,
  },

  label: {

    marginTop: Spacing.md,

    textAlign: 'center',
  },

});