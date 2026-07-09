import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';

// Keep the native splash visible until we hide it manually.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    async function prepare() {
      // Small delay allows the first React screen to mount cleanly.
      await new Promise(resolve => setTimeout(resolve, 100));

      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}