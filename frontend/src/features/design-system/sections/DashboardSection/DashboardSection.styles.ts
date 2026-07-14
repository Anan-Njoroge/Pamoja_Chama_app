import { StyleSheet } from 'react-native';

import {
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  section: {
    gap: Spacing.lg,
  },

  statsRow: {
    flexDirection: 'row',

    gap: Spacing.md,
  },

  actionsRow: {
    flexDirection: 'row',

    gap: Spacing.md,

    flexWrap: 'wrap',
  },
});