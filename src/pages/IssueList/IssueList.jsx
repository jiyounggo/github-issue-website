import React from 'react';
import { Link } from 'react-router-dom';
import { useIssueState } from '../../context/IssueProvider';

const IssueList = () => {
  const { data: issues } = useIssueState();

  return (
    <>
      {issues.map(issue => (
        <li key={issue.id}>
          <Link to={`/${issue.number}`}>{issue.title}</Link>
        </li>
      ))}
    </>
  );
};

export default IssueList;
