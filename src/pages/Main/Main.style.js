import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: ${props => props.theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
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

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
`;

export const Banner = styled(Li)`
  justify-content: center;
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: #000;
`;

export const Image = styled.img`
  height: 6rem;
  margin-right: 1rem;
`;

export const IssueContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const IssueTitle = styled.h2`
  font-size: 1.2rem;
  line-height: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.4rem;
  }
`;

export const IssueSubContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
`;

export const Comment = styled.div`
  flex: 0.15;
  text-align: end;
  font-size: 0.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
  /* min-width: 5rem; */
`;

export const LoadingBox = styled.li`
  background-color: beige;
  height: 6rem;
  margin-bottom: 1rem;
`;
