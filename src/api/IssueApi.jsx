import { useCallback, useEffect, useRef, useState } from 'react';
import useFetch from '../common/hooks/useFetch';
import Loading from '../components/Loading/Loading';

export const Api = ({
  getData,
  renderSuccess,
  loadingFallback = <Loading />,
  renderError = error => <p>Error!</p>,
}) => {
  const api = useCallback(() => getData(), []);
  const { isLoaded, error, data } = useFetch(api);

  if (isLoaded) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
};

export const ApiWithInfiniteScroll = ({
  getList,
  renderSuccess,
  loadingFallback = <Loading />,
  renderError = error => <p>Error!</p>,
}) => {
  const [page, setPage] = useState(1);
  const api = useCallback(() => getList(page), [page]);
  const { isLoaded, error, data } = useFetch(api);
  const [issues, setIssuses] = useState([]);
  const loader = useRef(null);

  const handleObserver = useCallback(
    ([{ isIntersecting }]) => {
      if (isIntersecting && !isLoaded && data?.length === 30) setPage(prev => prev + 1);
    },
    [data]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  useEffect(() => {
    if (isLoaded) return;
    setIssuses(prev => [...prev, ...data]);
  }, [data]);

  return (
    <>
      {issues.length > 0 && renderSuccess({ data: issues })}
      {isLoaded && loadingFallback}
      {error && renderError(error)}
      <div ref={loader} />
    </>
  );
};
