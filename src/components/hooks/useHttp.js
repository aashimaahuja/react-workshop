import { useCallback, useState } from 'react';

export const useHttp = (baseUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = useCallback(
    (url) => {
      setIsLoading(true);
      return fetch(`${baseUrl}${url}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Something went wrong. Please try again later !');
          }
          return res.json();
        })
        .catch(setError)
        .finally(() => setIsLoading(false));
    },
    [baseUrl],
  );

  return { isLoading, error, get };
};
