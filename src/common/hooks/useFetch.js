import { useState, useEffect, useCallback } from 'react';
import { getListByIssues } from '../../api/api';

export default function useFetch(page) {
  const [isLoaded, setIsLoad] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setIsLoad(true);
      setError(false);
      const res = await getListByIssues('open', 'comments', `${page}`);
      setList(prev => [...prev, ...res.data]);
      setIsLoad(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { isLoaded, error, list };
}
