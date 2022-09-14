import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: { Authorization: `${process.env.REACT_APP_ACCESS_TOKEN}` },
  // headers: ` ${process.env.REACT_APP_ACCESS_TOKEN}`,
});

const getApi = async () => {
  const response = await api.get(`issues?state=open&sort=comments`);
  return response;
};

export { getApi };
