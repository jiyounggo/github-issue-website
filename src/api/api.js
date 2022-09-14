import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    Authorization: `token ${process.env.REACT_APP_TOKEN}`,
  },
});

const getIssues = async () => {
  const response = await api.get(``, {
    params: {
      state: 'open',
      sort: 'comments',
    },
  });
  return response.data;
};

const getIssue = async issueNumber => {
  const response = await api.get(`/${issueNumber}`);

  return response.data;
};

export { getIssues, getIssue };
