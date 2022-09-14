import React, { useReducer, useMemo, useEffect, createContext, useContext } from 'react';
import { getIssues } from '../api/api';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

const IssueStateContext = createContext(null);

const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await getIssues();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
    console.info('IssueProvider!!');
  }, []);

  const { loading, data, error } = state;

  const value = useMemo(() => ({ loading, data, error }), [loading, data, error]);
  //자식컴포넌트로 보내줄것을 useMemo로 묶어서  적어준 뒤 전달하는것이 contextAPI쓸때 성능저하가 덜 일어난다.

  if (loading) return <div>로딩중....</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  // console.info('data: ', data);

  return (
    <IssueStateContext.Provider value={value}>
      <ul>{children}</ul>
    </IssueStateContext.Provider>
  );
};

export default IssueProvider;

export function useIssueState() {
  return useContext(IssueStateContext);
}
