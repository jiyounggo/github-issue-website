import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function useFetch(page) {
  const [isLoaded, setIsLoad] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setIsLoad(true);
      setError(false);
      const res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER_URL}&page=${page}`,
        headers: {
          Accept: 'application / vnd.github + json',
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
      });
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
