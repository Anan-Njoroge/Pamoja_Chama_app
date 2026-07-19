/**
 * ============================================================================
 * App Initialisation
 * ============================================================================
 */

import {

  useEffect,

} from 'react';

import {

  router,

} from 'expo-router';

import {

  authService,

} from '@/features/authentication';

export function useAppInitialization() {

  useEffect(() => {

    let mounted = true;

    async function initialise() {

      await new Promise<void>((resolve) => {

        setTimeout(resolve, 2500);

      });

      const {

        data,

      } = await authService.getSession();

      if (!mounted) {

        return;

      }

      if (data.session) {

        router.replace('/(main)');

      }

      else {

        router.replace('/(auth)/login');

      }

    }

    initialise();

    return () => {

      mounted = false;

    };

  }, []);

}