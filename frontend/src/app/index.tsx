import {
  useEffect,
} from 'react';

import {
  router,
} from 'expo-router';

import {
  useAuth,
} from '@/features/authentication/context/useAuth';

export default function Index() {

  const {

    loading,

    isAuthenticated,

  } = useAuth();

  useEffect(() => {

    if (loading) {

      return;

    }

    if (isAuthenticated) {

      router.replace('/(main)');

      return;

    }

    router.replace('/(auth)/login');

  }, [

    loading,

    isAuthenticated,

  ]);

  return null;

}