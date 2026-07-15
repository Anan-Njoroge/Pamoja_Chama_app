import { StyleSheet } from 'react-native';

import { Spacing } from '@/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    alignItems: 'center',

    gap: Spacing.lg,
  },

  column: {
    alignItems: 'center',

    gap: Spacing.sm,
  },
});