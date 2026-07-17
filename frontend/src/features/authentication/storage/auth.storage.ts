/**
 * ============================================================================
 * Authentication Storage
 * ============================================================================
 *
 * Handles secure persistence of authentication sessions.
 *
 * This is the only file that communicates with Expo SecureStore.
 * ============================================================================
 */
import { Platform } from 'react-native';

import * as SecureStore from 'expo-secure-store';

import type {

  AuthSession,

} from '../types/auth.types';

const SESSION_KEY =
  'pamoja-auth-session';

class AuthStorage {

  async saveSession(session: AuthSession) {
    const value = JSON.stringify(session);
  
    if (Platform.OS === 'web') {
      localStorage.setItem(SESSION_KEY, value);
      return;
    }
  
    await SecureStore.setItemAsync(SESSION_KEY, value);
  }

  async getSession(): Promise<AuthSession | null> {
    try {
      if (Platform.OS === 'web') {
        const value = localStorage.getItem(SESSION_KEY);
  
        return value ? JSON.parse(value) : null;
      }
  
      const value = await SecureStore.getItemAsync(
        SESSION_KEY,
      );
  
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }

  async clearSession() {
    if (Platform.OS === 'web') {
      localStorage.removeItem(SESSION_KEY);
      return;
    }
  
    await SecureStore.deleteItemAsync(SESSION_KEY);
  }

}

export const authStorage =
  new AuthStorage();