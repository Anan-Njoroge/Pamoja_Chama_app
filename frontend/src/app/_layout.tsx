/**
 * ============================================================================
 * Root Layout
 * ============================================================================
 *
 * Loads fonts and registers the application's providers.
 *
 * The native splash screen is intentionally NOT hidden here.
 * It is hidden inside the custom splash screen so the transition is seamless.
 *
 * ============================================================================
 */

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

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({

    DMSans_400Regular,

    DMSans_500Medium,

    DMSans_600SemiBold,

    DMSans_700Bold,

  });

  if (!fontsLoaded) {

    return null;

  }

  return (

    <SafeAreaProvider>

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