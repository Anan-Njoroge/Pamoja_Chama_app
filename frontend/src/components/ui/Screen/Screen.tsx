/**
 * ============================================================================
 * AppScreen
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Provides a consistent screen wrapper across the application.
 *
 * FEATURES
 * --------
 * ✓ Safe area support
 * ✓ Scrollable or fixed layout
 * ✓ Background colour
 * ✓ Padding
 * ✓ Accessibility
 *
 * ============================================================================
 */

import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors,
} from '@/theme';

import type{
  ViewComponentProps,
} from '@/types';


export interface AppScreenProps
  extends ViewComponentProps {

  children: React.ReactNode;

  scrollable?: boolean;
}

export function AppScreen({

  children,

  scrollable = false,

  style,

  testID,

  accessibilityLabel,

  accessibilityHint,

}: AppScreenProps) {

  if (scrollable) {

    return (

      <SafeAreaView
        style={styles.safeArea}
      >

        <ScrollView

          testID={testID}

          accessibilityLabel={accessibilityLabel}

          accessibilityHint={accessibilityHint}

          contentContainerStyle={[
            styles.scrollContent,
            style,
          ]}

          showsVerticalScrollIndicator={false}
        >

          {children}

        </ScrollView>

      </SafeAreaView>

    );

  }

  return (

    <SafeAreaView
      style={styles.safeArea}
    >

      <View

        testID={testID}

        accessibilityLabel={accessibilityLabel}

        accessibilityHint={accessibilityHint}

        style={[
          styles.container,
          style,
        ]}
      >

        {children}

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  safeArea: {

    flex: 1,

    backgroundColor: Colors.background,

  },

  container: {

    flex: 1,

  },

  scrollContent: {

    flexGrow: 1,

  },

});