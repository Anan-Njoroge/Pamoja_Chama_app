/**
 * ============================================================================
 * Splash Screen
 * ============================================================================
 */

import React, {

  useEffect,

} from 'react';

import {

  View,

} from 'react-native';

import * as ExpoSplashScreen from 'expo-splash-screen';

import {

  AppScreen,

  AppText,

} from '@/components/ui';

import {

  AnimatedLogo,

} from './components';

import {

  useAppInitialization,

} from './hooks/useAppInitialization';

export function SplashScreen() {

  /**
   * Hide the native splash once this screen
   * has mounted.
   */

  useEffect(() => {

    ExpoSplashScreen.hideAsync();

  }, []);

  useAppInitialization();

  return (

    <AppScreen>

      <View

        style={{

          flex: 1,

          justifyContent: 'center',

          alignItems: 'center',

        }}

      >

        <AnimatedLogo />

        <AppText

          variant="h2"

        >

          Pamoja Chama

        </AppText>

        <AppText>

          Empowering Community Savings

        </AppText>

      </View>

    </AppScreen>

  );

}

SplashScreen.displayName = 'SplashScreen';