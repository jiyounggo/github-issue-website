import { createContext, useContext } from 'react';
import { API } from '../api/api';

const ApiContext = createContext();

const IssuesAPI = ({ renderSuccess }) => (
  <API url={`/issues`} params={{ sort: 'comments' }} renderSuccess={renderSuccess} />
);
const IssueAPI = ({ id, renderSuccess }) => (
  <API url={`/issues/${id}`} renderSuccess={renderSuccess} />
);

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={{ IssuesAPI, IssueAPI }}>{children}</ApiContext.Provider>;
};
