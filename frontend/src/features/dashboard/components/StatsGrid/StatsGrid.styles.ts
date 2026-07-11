import { StyleSheet } from 'react-native';

import {

  Colors,

  Radius,

  Shadows,

  Spacing,

} from '@/theme';

export const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    gap: Spacing.md,

    marginBottom: Spacing.xl,

  },

  card: {

    width: '47%',

    padding: Spacing.lg,

    backgroundColor: Colors.white,

    borderRadius: Radius.lg,

    ...Shadows.sm,

  },

  icon: {

    marginBottom: Spacing.md,

  },

  title: {

    marginBottom: 4,

  },

});