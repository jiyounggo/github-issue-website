import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  flex: 0.3;
  text-align: end;
  font-size: 0.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
`;

export const LoadingBox = styled.li`
  background-color: beige;
  height: 6rem;
  margin-bottom: 1rem;
`;

export const SLink = styled(Link)`
  flex: 0.7;
  text-decoration: none;
  color: #000;
`;
