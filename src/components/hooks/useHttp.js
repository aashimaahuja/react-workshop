import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // @ts-ignore
  const baseUrl = import.meta.env.VITE_BASE_URL;

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

  const post = useCallback(
    (url, options) => {
      return fetch(`${baseUrl}${url}`, {
        method: 'POST',
        body: JSON.stringify(options.body),
        headers: options.headers,
      }).then((res) => res.json());
    },
    [baseUrl],
  );

  return { isLoading, error, get, post };
};
