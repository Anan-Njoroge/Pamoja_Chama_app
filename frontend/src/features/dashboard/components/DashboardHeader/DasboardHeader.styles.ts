import { StyleSheet } from 'react-native';

import {
  Colors,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: Spacing.xl,
  },

  left: {

    flex: 1,
  },

  greeting: {

    marginBottom: 4,
  },

  chama: {

    marginTop: 2,
  },

  actions: {

    flexDirection: 'row',

    alignItems: 'center',

    gap: Spacing.md,
  },

});