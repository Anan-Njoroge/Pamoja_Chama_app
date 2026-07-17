/**
 * ============================================================================
 * Authentication Layout Styles
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Shared layout styles for every authentication screen.
 *
 * Every authentication page in the application should look
 * visually consistent by using these styles.
 *
 * Used by:
 *
 * • Login
 * • OTP Verification
 * • Forgot Password (Future)
 * • Reset Password (Future)
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
   * Safe area container.
   */
  safeArea: {

    flex: 1,

    backgroundColor: Colors.background,
  },

  /**
   * Keyboard avoiding view.
   */
  keyboard: {

    flex: 1,
  },

  /**
   * ScrollView content.
   */
  scrollContent: {

    flexGrow: 1,

    justifyContent: 'center',

    paddingHorizontal: Spacing.lg,

    paddingVertical: Spacing.xxxl,
  },

  /**
   * Centers everything.
   */
  container: {

    width: '100%',

    maxWidth: 420,

    alignSelf: 'center',

    alignItems: 'center',
  },

  /**
   * Logo section.
   */
  logoContainer: {

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: Spacing.xxl,
  },

  /**
   * Logo image.
   */
  logo: {

    width: 140,

    height: 140,

    resizeMode: 'contain',
  },

  /**
   * Heading area.
   */
  header: {

    alignItems: 'center',

    marginBottom: Spacing.xxl,
  },

  /**
   * Screen title.
   */
  title: {

    textAlign: 'center',

    marginBottom: Spacing.sm,
  },

  /**
   * Supporting text.
   */
  subtitle: {

    textAlign: 'center',

    color: Colors.textSecondary,

    paddingHorizontal: Spacing.md,
  },

  /**
   * Screen specific content.
   */
  content: {

    width: '100%',
  },

  /**
   * Optional footer.
   */
  footer: {

    marginTop: Spacing.xxl,

    alignItems: 'center',
  },

  /**
   * Card wrapper for future glass effect.
   */
  card: {

    width: '100%',

    borderRadius: Radius.xl,
  },

});