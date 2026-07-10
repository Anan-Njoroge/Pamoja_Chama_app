import { StyleSheet } from 'react-native';

import {

  Colors,

  Spacing,

} from '@/theme';

export const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: Spacing.md,

  },

  content: {

    flex: 1,

    marginLeft: Spacing.md,

  },

  topRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  subtitle: {

    marginTop: 2,

  },

  date: {

    marginTop: 4,

  },

});