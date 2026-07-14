import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  category: {
    marginBottom: Spacing.xl,
  },

  grid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: Spacing.md,
  },

  item: {
    width: 80,

    alignItems: 'center',

    padding: Spacing.md,

    borderRadius: Radius.md,

    backgroundColor: Colors.card,
  },

  label: {
    marginTop: Spacing.sm,

    textAlign: 'center',
  },
});