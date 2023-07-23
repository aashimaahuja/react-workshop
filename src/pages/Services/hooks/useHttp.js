import { useCallback, useEffect, useState } from 'react';

export const useHttp = (url) => {
  const [data, setData] = useState([]);
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

  const post = useCallback((url, headers, body) => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
    }).then((res) => res.json());
  }, []);

  useEffect(() => {
    get(url).then(setData);
  }, [url, get]);

  return { data, isLoading, error, get, post };
};
