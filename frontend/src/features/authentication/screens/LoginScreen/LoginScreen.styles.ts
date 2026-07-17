/**
 * ============================================================================
 * Login Screen Styles
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Defines the layout and spacing of the LoginScreen.
 *
 * The AuthenticationLayout is responsible for the page structure.
 * These styles only control the content inside that layout.
 *
 * ============================================================================
 */

import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({

  /**
   * Wrapper for all screen content.
   */
  container: {

    width: '100%',
  },

  /**
   * Phone number field.
   */
  input: {

    marginBottom: Spacing.lg,
  },

  /**
   * Continue button.
   */
  button: {

    marginBottom: Spacing.xxxl,
  },

  /**
   * Divider between login and demo accounts.
   */
  dividerContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: Spacing.xxl,
  },

  divider: {

    flex: 1,
  },

  dividerText: {

    marginHorizontal: Spacing.md,

    color: Colors.textSecondary,
  },

  /**
   * Demo accounts section.
   */
  demoSection: {

    width: '100%',
  },

  demoTitle: {

    marginBottom: Spacing.xs,
  },

  demoSubtitle: {

    color: Colors.textSecondary,

    marginBottom: Spacing.lg,
  },

  /**
   * Space between demo cards.
   */
  demoCard: {

    marginBottom: Spacing.md,
  },

});