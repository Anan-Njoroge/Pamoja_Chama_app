import { StyleSheet } from 'react-native';

import { Spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    gap: Spacing.md,

    alignItems: 'center',
  },
});