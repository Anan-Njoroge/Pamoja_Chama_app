import { useMemo, useState } from 'react';

import { router } from 'expo-router';

import { useAuth } from '../../context/useAuth';

export function useLogin() {
  const {
    login,
    loading,
    setPendingPhoneNumber,
  } = useAuth();

  const [phoneNumber, setPhoneNumber] =
    useState('');

  /**
   * Very simple MVP validation.
   *
   * Later we'll replace this with
   * proper Kenyan phone validation.
   */
  const isValidPhoneNumber =
    useMemo(() => {
      return (
        phoneNumber.trim().length >= 10
      );
    }, [phoneNumber]);

  async function continueLogin() {
    if (!isValidPhoneNumber) {
      return;
    }

    await login(phoneNumber);

    setPendingPhoneNumber(
      phoneNumber,
    );

    router.push('/(auth)/otp');
  }

  function selectDemoAccount(
    phone: string,
  ) {
    setPhoneNumber(phone);
  }

  return {
    loading,

    phoneNumber,

    setPhoneNumber,

    isValidPhoneNumber,

    continueLogin,

    selectDemoAccount,
  };
}