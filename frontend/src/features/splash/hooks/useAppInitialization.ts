import { useEffect, useState } from 'react';

export function useAppInitialization() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function initialize() {
      /**
       * Future initialization:
       *
       * ✓ Restore login session
       * ✓ Load cached user
       * ✓ Initialize notifications
       * ✓ Configure API
       * ✓ Load remote config
       */

      await new Promise(resolve =>
        setTimeout(resolve, 1800)
      );

      setIsReady(true);
    }

    initialize();
  }, []);

  return {
    isReady,
  };
}