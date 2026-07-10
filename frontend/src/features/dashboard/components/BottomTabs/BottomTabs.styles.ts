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

    left: 16,

    right: 16,

    bottom: 24,

    backgroundColor: Colors.white,

    borderRadius: Radius.full,

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: Spacing.md,

    ...Shadows.lg,

  },

  tab: {

    alignItems: 'center',

    justifyContent: 'center',

    flex: 1,

  },

  label: {

    marginTop: 4,

  },

});