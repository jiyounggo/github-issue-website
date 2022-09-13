import React from 'react';
import { useIssueState } from '../../context/IssueProvider';

const IssueList = () => {
  const { data: issues } = useIssueState();
  // console.info(issues);
  return (
    <>
      {issues.map(i => (
        <li key={i.id}>{i.number}</li>
      ))}
    </>
  );
};

export default IssueList;
