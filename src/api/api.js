import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

const getApi = async () => {
  const response = await api.get(`issues?state=open&sort=comments`);
  return response;
};

export { getApi };
