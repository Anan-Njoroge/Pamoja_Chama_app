import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({

  container: {
    width: 110,
  },

  swatch: {
    height: 72,

    borderRadius: Radius.lg,

    borderWidth: 1,

    borderColor: Colors.border,

    ...Shadows.sm,
  },

  name: {
    marginTop: Spacing.sm,
  },

});