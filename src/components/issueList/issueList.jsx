import { Container } from './IssueList.style';

const IssueList = ({ number, title, commentsNumber, userId, created_at }) => {
  return (
    <Container>
      <span>#번호: {number} - </span>
      <span>제목: {title}</span>
      <div>코멘트수: {commentsNumber}</div>
      <span>작성자: {userId}</span>
      <span> , 작성일: {created_at}</span>
    </Container>
  );
};

export default IssueList;
