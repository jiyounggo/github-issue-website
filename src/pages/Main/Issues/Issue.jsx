import { Container, DetailLink } from './Issue.style';
import { ROUTE } from '../../../common/utils/constant';

const Issue = ({
  issue: {
    number,
    title,
    user: { login },
    comments,
    created_at,
  },
}) => {
  return (
    <Container>
      <DetailLink to={`${ROUTE.DETAIL}/${number}`}>
        <ul>
          <li>이슈번호: {number}</li>
          <li>이슈제목: {title}</li>
          <li>작성자: {login}</li>
          <li>작성일: {created_at}</li>
          <li>코멘트수: {comments}</li>
        </ul>
      </DetailLink>
    </Container>
  );
};

export default Issue;
