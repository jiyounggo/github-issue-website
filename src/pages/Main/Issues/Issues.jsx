import Issue from './Issue';
import { Container } from './Issues.style';

const Issues = ({ data }) => {
  return (
    <Container>
      {data.map(issue => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </Container>
  );
};

export default Issues;
