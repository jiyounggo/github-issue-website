import React from 'react';
import { useApi } from '../../context/Api';
import Issues from './Issues/Issues';
import { Container } from './Main.style';

function Main() {
  const { IssuesAPI } = useApi();
  return (
    <Container>
      This is MainPage
      <IssuesAPI renderSuccess={Issues} />
    </Container>
  );
}

export default Main;
