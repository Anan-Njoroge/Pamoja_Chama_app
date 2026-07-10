import { StyleSheet } from 'react-native';

import {

  Colors,

  Spacing,

} from '@/theme';

export const styles = StyleSheet.create({

  screen: {

    flex: 1,

    backgroundColor: Colors.background,

  },

  content: {

    paddingHorizontal: Spacing.lg,

    paddingTop: Spacing.lg,

    paddingBottom: 140,

  },

  section: {

    marginTop: Spacing.lg,

  },

});