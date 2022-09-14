import React, { createContext, useContext } from 'react';
import { Api, ApiWithInfiniteScroll } from '../api/IssueApi';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserList = ({ children }) => {
  const IssuesAPI = ({ params = {}, renderSuccess }) => {
    return (
      <>
        <ApiWithInfiniteScroll url={`/issues`} params={params} renderSuccess={renderSuccess} />
      </>
    );
  };
  const IssueAPI = ({ id, params = {}, renderSuccess }) => (
    <Api url={`/issues/${id}`} params={params} renderSuccess={renderSuccess} />
  );

  return <UserContext.Provider value={{ IssuesAPI, IssueAPI }}>{children}</UserContext.Provider>;
};
