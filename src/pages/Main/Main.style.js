import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  border: 1px solid;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;
