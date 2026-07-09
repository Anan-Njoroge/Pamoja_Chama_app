/**
 * ============================================================================
 * Application Entry Point
 * ============================================================================
 *
 * PURPOSE
 * -------
 * This is the first React screen rendered after the native Expo splash screen.
 *
 * It delegates startup responsibilities to the Splash feature, which:
 *
 * ✓ Displays the branded splash screen
 * ✓ Performs application initialization
 * ✓ Restores user session (future)
 * ✓ Loads user preferences (future)
 * ✓ Navigates to the appropriate destination
 *
 * Keeping this file intentionally minimal makes the application's startup
 * flow easier to understand and maintain.
 *
 * ============================================================================
 */

import React from 'react';

import { SplashScreen } from '@/features/splash';

export default function Index() {
  return <SplashScreen />;
}