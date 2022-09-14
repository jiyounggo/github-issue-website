import { useState, useEffect, useCallback } from 'react';

export default function useFetch(api) {
  const [isLoaded, setIsLoad] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const sendQuery = useCallback(async () => {
    try {
      setIsLoad(true);
      setError(false);
      const res = await api();
      setData(res.data);
      setIsLoad(false);
    } catch (err) {
      setError(err);
    }
  }, [api]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery]);

  return { isLoaded, error, data };
}
