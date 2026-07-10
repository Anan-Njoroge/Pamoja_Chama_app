import { StyleSheet } from 'react-native';

import {

  Colors,

  Radius,

  Spacing,

} from '@/theme';

export const styles = StyleSheet.create({

  container: {

    marginBottom: Spacing.xl,

  },

  content: {

    paddingHorizontal: Spacing.sm,

    gap: Spacing.md,

  },

  item: {

    width: 64,

    height: 84,

    borderRadius: Radius.lg,

    backgroundColor: Colors.white,

    justifyContent: 'center',

    alignItems: 'center',

  },

  selected: {

    backgroundColor: Colors.primary,

  },

  day: {

    marginBottom: 6,

  },

});