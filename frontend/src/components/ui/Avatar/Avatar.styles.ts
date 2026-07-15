import { StyleSheet } from 'react-native';

import {
  Colors,
  Radius,
} from '@/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    alignItems: 'center',

    overflow: 'hidden',

    borderRadius: Radius.full,
  },

  image: {
    width: '100%',

    height: '100%',
  },

  indicator: {
    position: 'absolute',

    right: 0,

    bottom: 0,

    backgroundColor: Colors.success,

    borderWidth: 2,

    borderColor: Colors.white,

    borderRadius: Radius.full,
  },
});