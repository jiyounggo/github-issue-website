import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header, Title } from './IssueDetail.style';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useUser } from '../../context/UserList';
import IssueContent from './IssueContent';

const IssueDetail = () => {
  const { number } = useParams();
  const { IssueAPI } = useUser();

  // const converter = new Showdown.Converter();
  // const text = `${issueData?.body}`;
  // const html = converter.makeHtml(text).toString();

  return (
    <Container>
      <Header>
        <Title>Angular / Angular-cli</Title>
      </Header>
      <IssueAPI id={number} renderSuccess={IssueContent} />
    </Container>
  );
};

export default IssueDetail;

// const Component = ({ value }) => {
//   return (
//     <SyntaxHighlighter language="javascript" style={docco}>
//       {value ?? ''}
//     </SyntaxHighlighter>
//   );
// };

// function CodeBlock(children: { value: React.ReactNode }) {
//   return (
//     <Pre>
//       <code>{children.value}</code>
//     </Pre>
//   );
// }
