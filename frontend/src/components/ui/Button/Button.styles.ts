import { StyleSheet } from 'react-native';

import {
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  button: {
    borderRadius: Radius.full,

    justifyContent: 'center',

    alignItems: 'center',

    ...Shadows.sm,
  },

  content: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  leftIcon: {
    marginRight: Spacing.sm,
  },

  rightIcon: {
    marginLeft: Spacing.sm,
  },
});