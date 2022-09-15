import React from 'react';
import { useAPIContext } from '../../context/APIContext';
import Issues from './Issues/Issues';
import { Container, MainContainer } from './Main.style';

function Main() {
  const { IssuesAPI } = useAPIContext();

  return (
    <Container>
      <MainContainer>
        <IssuesAPI renderSuccess={Issues} />
      </MainContainer>
    </Container>
  );
}

export default Main;
