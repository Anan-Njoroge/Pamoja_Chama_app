import { StyleSheet } from 'react-native';

import {
  Radius,
  Spacing,
} from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',

    alignSelf: 'flex-start',

    borderRadius: Radius.full,

    borderWidth: 1,
  },

  label: {
    marginLeft: Spacing.xs,

    fontWeight: '600',
  },
});