import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './IssueDetail.style';
import { useAPIContext } from '../../context/APIContext';
import IssueContent from './IssueContent';

const IssueDetail = () => {
  const { number } = useParams();
  const { IssueAPI } = useAPIContext();

  return (
    <Container>
      <IssueAPI id={number} renderSuccess={IssueContent} />
    </Container>
  );
};

export default IssueDetail;
