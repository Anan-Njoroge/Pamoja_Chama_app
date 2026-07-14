import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.xxl,

    overflow: 'hidden',

    ...Shadows.md,
  },

  gradient: {
    padding: Spacing.xl,
  },

  title: {
    color: Colors.primaryLight,

    opacity: 0.9,

    marginBottom: Spacing.sm,
  },

  amount: {
    color: Colors.white,

    marginBottom: Spacing.lg,
  },

  progressBackground: {
    height: 10,

    borderRadius: 999,

    backgroundColor: 'rgba(255,255,255,0.25)',

    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',

    borderRadius: 999,

    backgroundColor: Colors.successBright,
  },

  progressInfo: {
    marginTop: Spacing.sm,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  progressText: {
    color: Colors.white,

    opacity: 0.9,
  },

  footer: {
    marginTop: Spacing.xl,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  button: {
    backgroundColor: Colors.white,
  },
});