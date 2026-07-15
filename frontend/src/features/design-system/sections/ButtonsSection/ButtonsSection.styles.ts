import { StyleSheet } from 'react-native';

import { Spacing } from '@/theme';

export const styles = StyleSheet.create({

  group: {
    marginBottom: Spacing.xl,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },

  title: {
    marginBottom: Spacing.md,
  },

});