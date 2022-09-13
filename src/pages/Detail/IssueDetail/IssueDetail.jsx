import { Container } from '../Detail.style';

const IssueDetail = ({
  data: {
    number,
    title,
    body,
    user: { login, avatar_url },
    comments,
    created_at,
  },
}) => {
  return (
    <Container>
      <ul>
        <li>이슈번호: {number}</li>
        <li>이슈제목: {title}</li>
        <li>작성자: {login}</li>
        <li>작성일: {created_at}</li>
        <li>코멘트 수: {comments}</li>
        <li>작성자 프로필 이미지: {avatar_url}</li>
        <li>본문: {body}</li>
      </ul>
    </Container>
  );
};

export default IssueDetail;
