/**
 * ============================================================================
 * AppDivider Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppDivider provides a consistent separator between UI elements.
 *
 * WHY?
 * ----
 * Instead of manually creating thin Views throughout the application,
 * we centralize divider styling into one reusable component.
 *
 * This ensures:
 *
 * ✓ Consistent colours
 * ✓ Consistent spacing
 * ✓ Theme integration
 * ✓ Easy maintenance
 * ✓ Reusable horizontal and vertical dividers
 *
 * EXAMPLES
 * --------
 *
 * <AppDivider />
 *
 * <AppDivider spacing="lg" />
 *
 * <AppDivider vertical />
 *
 * <AppDivider label="Today" />
 *
 * ============================================================================
 */

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import type {
  ViewStyle,
} from 'react-native';

import {
  Colors,
  Spacing,
  Typography,
} from '@/theme';

import type {
  ViewComponentProps,
} from '@/types';

import { AppText } from '../Text';

export interface AppDividerProps extends ViewComponentProps {

  /**
   * Render the divider vertically.
   *
   * Default:
   * Horizontal
   */
  vertical?: boolean;

  /**
   * Margin surrounding the divider.
   */
  spacing?: keyof typeof Spacing;

  /**
   * Divider thickness.
   */
  thickness?: number;

  /**
   * Divider colour.
   */
  color?: keyof typeof Colors;

  /**
   * Optional label displayed in the centre.
   *
   * Example:
   *
   * -------- Today --------
   */
  label?: string;
}

/**
 * ============================================================================
 * AppDivider
 * ============================================================================
 *
 * A reusable divider used throughout the application.
 *
 * Supports:
 *
 * ✓ Horizontal divider
 * ✓ Vertical divider
 * ✓ Labelled divider
 *
 * ============================================================================
 */

export function AppDivider({

  vertical = false,

  spacing = 'md',

  thickness = StyleSheet.hairlineWidth,

  color = 'divider',

  label,

  style,

  ...props

}: AppDividerProps) {

  /**
   * Vertical dividers don't support labels.
   */
  if (vertical) {

    return (

      <View

        {...props}

        style={[

          styles.vertical,

          {
            width: thickness,

            backgroundColor: Colors[color],

            marginHorizontal: Spacing[spacing],
          },

          style,

        ]}

      />

    );

  }

  /**
   * Labelled divider.
   */
  if (label) {

    return (

      <View

        {...props}

        style={[

          styles.labelContainer,

          {
            marginVertical: Spacing[spacing],
          },

          style,

        ]}

      >

        <View
          style={[
            styles.line,
            {
              height: thickness,
              backgroundColor: Colors[color],
            },
          ]}
        />

        <AppText
          variant="caption"
          color="textSecondary"
          style={styles.label}
        >
          {label}
        </AppText>

        <View
          style={[
            styles.line,
            {
              height: thickness,
              backgroundColor: Colors[color],
            },
          ]}
        />

      </View>

    );

  }

  /**
   * Default horizontal divider.
   */
  return (

    <View

      {...props}

      style={[

        {

          width: '100%',

          height: thickness,

          backgroundColor: Colors[color],

          marginVertical: Spacing[spacing],

        },

        style,

      ]}

    />

  );

}

/**
 * Improves the component name shown in React DevTools.
 */
AppDivider.displayName = 'AppDivider';

/**
 * ============================================================================
 * Styles
 * ============================================================================
 *
 * Static styles only.
 *
 * Dynamic values such as colours, spacing and thickness are applied
 * inside the component.
 */

const styles = StyleSheet.create({

  vertical: {

    alignSelf: 'stretch',

  },

  labelContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    width: '100%',

  },

  line: {

    flex: 1,

  },

  label: {

    marginHorizontal: Spacing.md,

    ...Typography.caption,

  },

});