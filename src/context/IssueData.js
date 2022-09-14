import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { api } from '../api/api';

export const IssueDataContext = createContext();

const IssueDataProvider = ({ children }) => {
  const [IssueData, setIssueData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getIssueData = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/issues`, { params: { state: 'open', sort: 'comments' } });

      setIssueData(res.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getIssueData();
  }, []);

  return (
    <IssueDataContext.Provider value={{ IssueData, setIssueData, loading, error }}>
      {children}
    </IssueDataContext.Provider>
  );
};

export default IssueDataProvider;
