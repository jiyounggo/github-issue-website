import { createContext, useContext } from 'react';
import { Api, ApiWithInfiniteScroll } from '../api/api';

const ApiContext = createContext();

const IssuesAPI = ({ renderSuccess }) => {
  return (
    <>
      <ApiWithInfiniteScroll
        url={`/issues`}
        params={{ sort: 'comments' }}
        renderSuccess={renderSuccess}
      />
    </>
  );
};
const IssueAPI = ({ id, renderSuccess }) => (
  <Api url={`/issues/${id}`} renderSuccess={renderSuccess} />
);

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={{ IssuesAPI, IssueAPI }}>{children}</ApiContext.Provider>;
};
