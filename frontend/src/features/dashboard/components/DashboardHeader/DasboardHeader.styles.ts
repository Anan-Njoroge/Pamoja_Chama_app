import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.lg,

    marginTop: Spacing.md,

    marginBottom: Spacing.xl,

    borderRadius: Radius.xl,

    overflow: 'hidden',

    ...Shadows.sm,
  },

  content: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: Spacing.lg,

    paddingVertical: Spacing.lg,
  },

  left: {
    flex: 1,
  },

  greeting: {
    marginBottom: 4,
  },

  chama: {
    marginBottom: 2,
  },

  username: {
    opacity: 0.8,
  },

  actions: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: Spacing.md,
  },

  iconButton: {
    width: 44,

    height: 44,

    borderRadius: 22,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: Colors.primaryLight,
  },
});