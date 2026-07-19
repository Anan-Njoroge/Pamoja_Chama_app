/**
 * ============================================================================
 * Root Layout
 * ============================================================================
 *
 * PURPOSE
 * -------
 * This is the application's root component.
 *
 * Responsibilities
 * ----------------
 * • Load application fonts
 * • Keep the native splash screen visible while loading
 * • Register global providers
 * • Configure Expo Router navigation
 *
 * ============================================================================
 */

import { useCallback } from 'react';

import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';

import {

  useFonts,

  DMSans_400Regular,

  DMSans_500Medium,

  DMSans_600SemiBold,

  DMSans_700Bold,

} from '@expo-google-fonts/dm-sans';

import { AppProviders } from '@/providers';

// Keep the native splash screen visible
// until the application is ready.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({

    DMSans_400Regular,

    DMSans_500Medium,

    DMSans_600SemiBold,

    DMSans_700Bold,

  });

  /**
   * Hide the native splash screen once
   * the application has finished loading.
   */

  const onLayoutRootView = useCallback(

    async () => {

      if (fontsLoaded) {

        await SplashScreen.hideAsync();

      }

    },

    [fontsLoaded],

  );

  if (!fontsLoaded) {

    return null;

  }

  return (

    <SafeAreaProvider onLayout={onLayoutRootView}>

      <AppProviders>

        <StatusBar style="light" />

        <Stack

          screenOptions={{

            headerShown: false,

          }}

        />

      </AppProviders>

    </SafeAreaProvider>

  );

}