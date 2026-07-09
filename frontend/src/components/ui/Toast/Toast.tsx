/**
 * ============================================================================
 * AppToast
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Displays a temporary notification to the user.
 *
 * Toasts provide feedback without interrupting the user's workflow.
 *
 * Examples:
 *
 * ✓ Payment recorded
 * ✓ Member added
 * ✓ Connection lost
 * ✓ Loan approved
 *
 * NOTE
 * ----
 * This component only renders the UI.
 *
 * Displaying and dismissing toasts will later be managed by a
 * ToastProvider using React Context.
 *
 * ============================================================================
 */

import React from 'react';

import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';


import { AppCard } from '../Card';
import { AppText } from '../Text';
import { AppIcon, type IconName } from '../Icon';

import {
  Colors,
  Spacing,
} from '@/theme';


export type ToastVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

interface AppToastProps {

  variant?: ToastVariant;

  title: string;

  description?: string;

  style?: StyleProp<ViewStyle>;

  testID?: string;
}

const ICONS: Record<ToastVariant, IconName> = {

  success: 'success',

  warning: 'warning',

  error: 'error',

  info: 'notification',
};

const COLOURS = {

  success: 'success',

  warning: 'pending',

  error: 'danger',

  info: 'primary',

} as const;

export function AppToast({

  variant = 'info',

  title,

  description,

  style,

  testID,

}: AppToastProps) {

  return (

    <AppCard
      testID={testID}
      style={[
        styles.card,
        style,
      ]}
    >

      <AppIcon
        name={ICONS[variant]}
        color={COLOURS[variant]}
        size="lg"
      />

      <View style={styles.content}>

        <AppText variant="button">

          {title}

        </AppText>

        {description && (

          <AppText
            variant="small"
            color="textSecondary"
            style={styles.description}
          >
            {description}
          </AppText>

        )}

      </View>

    </AppCard>

  );
}

const styles = StyleSheet.create({

  card: {

    flexDirection: 'row',

    alignItems: 'flex-start',

    padding: Spacing.md,

    gap: Spacing.md,

    borderLeftWidth: 4,

    borderLeftColor: Colors.primary,
  },

  content: {

    flex: 1,
  },

  description: {

    marginTop: Spacing.xs,
  },

});