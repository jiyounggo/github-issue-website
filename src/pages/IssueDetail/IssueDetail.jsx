import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header, Title } from './IssueDetail.style';
import { useUser } from '../../context/UserList';
import IssueContent from './IssueContent';

const IssueDetail = () => {
  const { number } = useParams();
  const { IssueAPI } = useUser();

  return (
    <Container>
      <Header>
        <Title>Angular / Angular-cli</Title>
      </Header>
      <IssueAPI id={number} renderSuccess={IssueContent} />
    </Container>
  );
};

export default IssueDetail;
