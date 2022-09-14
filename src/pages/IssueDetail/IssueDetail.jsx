import React from 'react';
import { useParams } from 'react-router-dom';
// import Showdown from 'showdown';
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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useUser } from '../../context/UserList';

const IssueDetail = () => {
  const { number } = useParams();
  const { IssueAPI } = useUser();

  // const converter = new Showdown.Converter();
  // const text = `${issueData?.body}`;
  // const html = converter.makeHtml(text).toString();

  // 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문

  // TODO 컴포넌트로 분리 예정
  const renderSuccess = ({
    data: {
      number,
      title,
      body,
      user: { login, avatar_url },
      comments,
      created_at,
    },
  }) => (
    <>
      <TopSection>
        <Avatar src={avatar_url} alt="user_avatar" />
        <ContentDiv>
          <FirstDiv>
            <div>
              # {number}
              <span style={{ paddingRight: '10px' }}></span>
            </div>
            <div style={{ fontWeight: '600' }}> {title}</div>
          </FirstDiv>
          <SecondDiv>코멘트: {comments}</SecondDiv>
          <ThirdDiv>
            <div>
              작성자: {login}
              <span style={{ paddingRight: '10px' }}></span>
            </div>
            <div>작성일: {convertDate(created_at)}</div>
          </ThirdDiv>
        </ContentDiv>
      </TopSection>
      {/* <section dangerouslySetInnerHTML={{ __html: html }}></section> */}
      <ReactMarkdown
        children={body}
        components={{
          code: Component,
        }}
      />
    </>
  );

  return (
    <Container>
      <Header>
        s<Title>Angular / Angular-cli</Title>
      </Header>
      <IssueAPI id={number} renderSuccess={renderSuccess} />
    </Container>
  );
};

export default IssueDetail;

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};
