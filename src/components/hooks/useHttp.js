import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = useCallback((url) => {
    setIsLoading(true);
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong. Please try again later !');
        }
        return res.json();
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, error, get };
};
