/**
 * ============================================================================
 * AppCard Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppCard provides a reusable container for displaying grouped content.
 *
 * Instead of styling every View individually, screens should wrap related
 * information inside AppCard.
 *
 * BENEFITS
 * --------
 * • Consistent spacing
 * • Consistent border radius
 * • Consistent shadows
 * • Centralized styling
 * • Easy maintenance
 *
 * EXAMPLES
 * --------
 * Dashboard summary cards
 * Member cards
 * Contribution cards
 * Notification cards
 * Report cards
 *
 * ============================================================================
 */

import React from 'react';

import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '../../../theme';

/**
 * ============================================================================
 * Props
 * ============================================================================
 */

interface AppCardProps {
  /**
   * Content rendered inside the card.
   */
  children: React.ReactNode;

  /**
   * Makes the card pressable.
   *
   * If omitted, the card behaves as a normal container.
   */
  onPress?: () => void;

  /**
   * Additional styles.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Internal spacing.
   */
  padding?: number;

  /**
   * Whether the card should display a shadow.
   */
  elevated?: boolean;
}

/**
 * ============================================================================
 * Component
 * ============================================================================
 */

export default function AppCard({
  children,
  onPress,
  style,
  padding = Spacing.md,
  elevated = true,
}: AppCardProps) {
  const cardStyle = [
    styles.card,
    elevated && Shadows.sm,
    { padding },
    style,
  ];

  /**
   * If an onPress callback exists,
   * render a Pressable card.
   */

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          cardStyle,
          pressed && styles.pressed,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  /**
   * Otherwise render a normal View.
   */

  return <View style={cardStyle}>{children}</View>;
}

/**
 * ============================================================================
 * Styles
 * ============================================================================
 */

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,

    borderRadius: Radius.lg,

    borderWidth: 1,

    borderColor: Colors.border,
  },

  pressed: {
    opacity: 0.92,
  },
});