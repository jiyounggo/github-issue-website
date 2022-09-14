import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import useFetch from '../common/hooks/useFetch';

export const UserContext = createContext(null);

function UserList(props) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { isLoaded, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <UserContext.Provider value={{ isLoaded, error, list, loader, setQuery }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserList;
