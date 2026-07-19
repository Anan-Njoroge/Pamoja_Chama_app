/**
 * ============================================================================
 * Supabase Storage
 * ============================================================================
 *
 * Native
 * -------
 * SecureStore
 *
 * Web
 * ---
 * localStorage
 *
 * SSR
 * ---
 * In-memory (no-op)
 *
 * ============================================================================
 */

import { Platform } from 'react-native';

import * as SecureStore from 'expo-secure-store';

const isBrowser =
  typeof window !== 'undefined';

export const secureStorage = {
  async getItem(
    key: string,
  ): Promise<string | null> {

    if (Platform.OS === 'web') {

      if (!isBrowser) {

        return null;

      }

      return window.localStorage.getItem(key);

    }

    return SecureStore.getItemAsync(key);

  },

  async setItem(
    key: string,
    value: string,
  ): Promise<void> {

    if (Platform.OS === 'web') {

      if (!isBrowser) {

        return;

      }

      window.localStorage.setItem(
        key,
        value,
      );

      return;

    }

    await SecureStore.setItemAsync(
      key,
      value,
    );

  },

  async removeItem(
    key: string,
  ): Promise<void> {

    if (Platform.OS === 'web') {

      if (!isBrowser) {

        return;

      }

      window.localStorage.removeItem(key);

      return;

    }

    await SecureStore.deleteItemAsync(
      key,
    );

  },

};