import styled from 'styled-components';

export const Container = styled.ul`
  width: 100vw;
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;
  @media ${({ theme }) => theme.device.mobile} {
    background-color: yellow;
  }
  background-color: cadetblue;
  margin: 0 auto;
`;
