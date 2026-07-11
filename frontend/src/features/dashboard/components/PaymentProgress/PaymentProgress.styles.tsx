import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
  Typography,
} from '@/theme';

export const styles = StyleSheet.create({

  card: {
    backgroundColor: Colors.primary,

    borderRadius: Radius.xl,

    padding: Spacing.xl,

    ...Shadows.md,
  },

  title: {
    ...Typography.body,

    color: Colors.white,

    opacity: 0.85,
  },

  amount: {
    ...Typography.h1,

    color: Colors.white,

    marginTop: Spacing.sm,
  },

  progressBackground: {
    height: 10,

    backgroundColor: 'rgba(255,255,255,0.25)',

    borderRadius: 999,

    marginTop: Spacing.lg,

    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',

    backgroundColor: Colors.success,

    borderRadius: 999,
  },

  footer: {
    marginTop: Spacing.md,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  members: {
    color: Colors.white,
  },

  button: {
    backgroundColor: Colors.white,
  },

});