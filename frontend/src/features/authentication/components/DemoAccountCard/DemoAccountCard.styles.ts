import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.md,

    padding: Spacing.lg,

    borderRadius: Radius.lg,

    backgroundColor: Colors.surface,

    ...Shadows.sm,
  },

  row: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  content: {
    flex: 1,

    marginLeft: Spacing.md,
  },

  phone: {
    marginTop: Spacing.xs,
  },
});