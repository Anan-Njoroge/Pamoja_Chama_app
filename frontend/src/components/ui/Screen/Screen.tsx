/**
 * ============================================================================
 * AppScreen Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppScreen is the base layout component for every screen in the application.
 *
 * Instead of wrapping every screen with a <View> or <SafeAreaView>, we wrap
 * it with <AppScreen>. This ensures that every screen has:
 *
 *  • Safe area support (notches, status bar, navigation bar)
 *  • Consistent background color
 *  • A common starting point for layout
 *
 * WHY USE react-native-safe-area-context?
 * ---------------------------------------
 * React Native's built-in SafeAreaView has been deprecated.
 *
 * Expo recommends using:
 *
 *    react-native-safe-area-context
 *
 * because it works consistently across Android and iOS and provides much
 * more control over how safe areas are handled.
 *
 * HOW IT FITS INTO THE PROJECT
 * ----------------------------
 * Every screen in Pamoja Chama should begin like this:
 *
 *    <AppScreen>
 *      ...
 *    </AppScreen>
 *
 * This gives every screen a consistent foundation.
 * ============================================================================
 */

import React from 'react';

import {
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

import { Colors } from '../../../theme';

/**
 * Props accepted by the AppScreen component.
 */
interface AppScreenProps {
  /**
   * The content to display inside the screen.
   */
  children: React.ReactNode;

  /**
   * Optional additional styles.
   *
   * StyleProp<ViewStyle> allows:
   *
   * - StyleSheet.create()
   * - Inline objects
   * - Arrays of styles
   * - Conditional styles
   *
   * This is the recommended React Native type.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Specifies which screen edges should respect the device's safe area.
   *
   * Default:
   *
   * top
   * left
   * right
   *
   * We intentionally leave out "bottom" because many future screens
   * (bottom navigation, forms, lists) may need to extend to the bottom
   * of the display.
   */
  edges?: Edge[];
}

/**
 * ============================================================================
 * AppScreen
 * ============================================================================
 */

export default function AppScreen({
  children,
  style,
  edges = ['top', 'left', 'right'],
}: AppScreenProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.container,
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

/**
 * ============================================================================
 * Styles
 * ============================================================================
 */

const styles = StyleSheet.create({
  /**
   * Every screen should:
   *
   * - Fill the device
   * - Use the application's default background color
   */
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});