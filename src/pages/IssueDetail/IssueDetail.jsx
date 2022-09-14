import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Showdown from 'showdown';
import { getIssue } from '../../api/api';
import { convertDate } from '../../common/utils/convertDate';
import {
  Avatar,
  Container,
  Header,
  Title,
  TopSection,
  ContentDiv,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
} from './IssueDetail.style';
import ReactMarkdown from 'react-markdown';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const IssueDetail = () => {
  const { number } = useParams();

  const [issueData, setIssueData] = useState([]);

  async function fetchIssue() {
    const res = await getIssue(number);
    setIssueData(res);
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  // const converter = new Showdown.Converter();
  // const text = `${issueData?.body}`;
  // const html = converter.makeHtml(text).toString();

  return (
    <Container>
      <Header>
        <Title>Angular / Angular-cli</Title>
      </Header>
      <TopSection>
        <Avatar src={issueData?.user?.avatar_url} alt="user_avatar" />
        <ContentDiv>
          <FirstDiv>
            <div>
              # {number}
              <span style={{ paddingRight: '10px' }}></span>
            </div>
            <div style={{ fontWeight: '600' }}> {issueData?.title}</div>
          </FirstDiv>
          <SecondDiv>코멘트: {issueData?.comments}</SecondDiv>
          <ThirdDiv>
            <div>
              작성자: {issueData?.user?.login}
              <span style={{ paddingRight: '10px' }}></span>
            </div>
            <div>작성일: {convertDate(issueData)}</div>
          </ThirdDiv>
        </ContentDiv>
      </TopSection>
      {/* <section dangerouslySetInnerHTML={{ __html: html }}></section> */}
      <ReactMarkdown children={issueData?.body} />
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
