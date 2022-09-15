import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}`;
const OWNER = `${process.env.REACT_APP_OWNER}`;
const REPO = `${process.env.REACT_APP_REPO}`;

const api = axios.create({
  baseURL: `${API_URL}/${OWNER}/${REPO}`,
  headers: { Accept: 'application/vnd.github+json' },
});

const getListByIssues = async (state, sort, page) => {
  const response = await api.get(`issues`, {
    params: { state: state, sort: sort, page: page },
  });
  return response;
};

const getIssue = async id => {
  const response = await api.get(`issues/${id}`);
  return response;
};

export { getListByIssues, getIssue };
