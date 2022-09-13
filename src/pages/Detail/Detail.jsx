import { useParams } from 'react-router-dom';
import { useApi } from '../../context/Api';
import { Container } from './Detail.style';
import IssueDetail from './IssueDetail/IssueDetail';

const Detail = () => {
  const { id } = useParams();
  const { IssueAPI } = useApi();

  return (
    <Container>
      <h2>Hello</h2>
      <IssueAPI id={id} renderSuccess={IssueDetail} />
    </Container>
  );
};

export default Detail;
