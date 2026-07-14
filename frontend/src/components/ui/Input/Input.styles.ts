import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
  },

  label: {
    marginBottom: Spacing.sm,
  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: Colors.surface,

    borderWidth: 1,

    borderColor: Colors.border,

    borderRadius: Radius.lg,

    paddingHorizontal: Spacing.md,

    minHeight: 52,

    ...Shadows.sm,
  },

  input: {
    flex: 1,

    paddingVertical: Spacing.md,
  },

  helper: {
    marginTop: Spacing.xs,
  },

  iconLeft: {
    marginRight: Spacing.sm,
  },

  iconRight: {
    marginLeft: Spacing.sm,
  },

});