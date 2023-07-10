import { useEffect, useState } from 'react';

export const useEmailList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://flipkart-email-mock.now.sh/')
      .then((res) => res.json())
      .then((data) => {
        setData(data.list);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
