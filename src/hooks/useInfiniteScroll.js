import { useEffect, useState } from 'react';
import { getIssues } from '../api/api';

function useInfiniteScroll(owner, repo, params = {}) {
  let page = 1;

  const [infiniteData, setInfiniteData] = useState([]);

  const loadMorePages = async () => {
    const res = await getIssues(owner, repo, {
      ...params,
      page,
    });
    setInfiniteData(cur => [...cur, ...res]);
    page += 1;
  };

  useEffect(() => {
    let fetching = false;
    const loadIssues = async () => {
      await loadMorePages();
    };
    loadIssues();
    const onScroll = async e => {
      const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        await loadMorePages();
        fetching = false;
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return [infiniteData];
}

export default useInfiniteScroll;
