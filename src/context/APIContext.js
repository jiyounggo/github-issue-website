import React, { createContext, useContext } from 'react';
import { getIssue, getListByIssues } from '../api/api';
import { Api, ApiWithInfiniteScroll } from '../api/IssueApi';

const UserContext = createContext(null);

export const useAPIContext = () => useContext(UserContext);

export const APIContext = ({ children }) => {
  const IssuesAPI = ({ renderSuccess }) => (
    <>
      <ApiWithInfiniteScroll
        getList={page => getListByIssues('open', 'comments', page)}
        renderSuccess={renderSuccess}
      />
    </>
  );
  const IssueAPI = ({ id, renderSuccess }) => (
    <Api getData={() => getIssue(id)} renderSuccess={renderSuccess} />
  );

  return <UserContext.Provider value={{ IssuesAPI, IssueAPI }}>{children}</UserContext.Provider>;
};
