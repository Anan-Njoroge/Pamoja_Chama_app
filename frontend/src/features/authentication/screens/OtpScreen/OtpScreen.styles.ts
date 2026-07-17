import { StyleSheet } from 'react-native';

import {
  Spacing,
  Colors,
} from '@/theme';

export const styles = StyleSheet.create({

  container: {

    width: '100%',

  },

  otpInput: {

    marginBottom: Spacing.lg,

  },

  verifyButton: {

    marginBottom: Spacing.lg,

  },

  resendButton: {

    alignSelf: 'center',

  },

  helperText: {

    textAlign: 'center',

    color: Colors.textSecondary,

    marginBottom: Spacing.xl,

  },

});