import React from 'react';
import { useUser } from '../../context/UserList';
import Issues from './Issues/Issues';
import { Container, Header, MainContainer, Title } from './Main.style';

function Main() {
  const { IssuesAPI } = useUser();

  return (
    <Container>
      <Header>
        <Title>Angular / Angular-cli</Title>
      </Header>
      <MainContainer>
        <IssuesAPI renderSuccess={Issues} />
      </MainContainer>
    </Container>
  );
}

export default Main;
