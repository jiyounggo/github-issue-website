import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid;
`;

export const Header = styled.header`
  height: 6rem;
  text-align: center;
  line-height: 6rem;
`;
export const Title = styled.h1`
  font-size: 2rem;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Avatar = styled.img`
  max-width: 100px;
  height: 100px;
  margin-right: 2rem;
`;

export const ContentDiv = styled.div`
  border-bottom: 2px solid gray;
  width: 80%;
  margin-top: 2rem;
  padding: 1rem 1rem 1rem 0;
  @media ${props => props.theme.device.mobile} {
    & {
      flex-direction: column;
      line-height: 1.2rem;
      padding: 0;
      padding-bottom: 2rem;
    }
  }
`;

export const FirstDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${props => props.theme.device.mobile} {
    & {
      flex-direction: column;
    }
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${props => props.theme.device.mobile} {
    & {
      justify-content: flex-start;
    }
  }
`;

export const ThirdDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${props => props.theme.device.mobile} {
    & {
      flex-direction: column;
      margin-bottom: 0.1rem;
    }
  }
`;
