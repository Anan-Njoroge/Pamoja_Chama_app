import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({

  container: {

    position: 'absolute',

    right: Spacing.xl,

    bottom: 96,

  },

  button: {

    backgroundColor: Colors.primary,

    borderRadius: Radius.full,

    paddingHorizontal: Spacing.xl,

    paddingVertical: Spacing.md,

    flexDirection: 'row',

    alignItems: 'center',

    ...Shadows.lg,

  },

  icon: {

    marginRight: Spacing.sm,

  },

});