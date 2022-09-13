import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = `${process.env.REACT_APP_API_URL}`;
const OWNER = `${process.env.REACT_APP_OWNER}`;
const REPO = `${process.env.REACT_APP_REPO}`;
const GH_TOKEN = `${process.env.REACT_APP_TOKEN}`;

const api = axios.create({
  baseURL: `${API_URL}/${OWNER}/${REPO}`,
  headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${GH_TOKEN}` },
});

export const useAxios = ({ method = 'get', url, params }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    api({
      method,
      url,
      params,
    })
      .then(response => response.data)
      .then(setData)
      .then(() => setLoading(false))
      .catch(e => {
        setError(e);
      });
  }, [url]);

  return { data, error, loading };
};

export const API = ({
  url,
  params,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = error => <pre>{JSON.stringify(error)}</pre>,
}) => {
  const { data, error, loading } = useAxios({ url, params });

  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
};
