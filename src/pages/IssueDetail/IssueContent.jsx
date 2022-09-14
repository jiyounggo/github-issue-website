import React from 'react';
import { TopSection, Avatar, ContentDiv, FirstDiv, SecondDiv, ThirdDiv } from './IssueDetail.style';
import ReactMarkdown from 'react-markdown';
import { convertDate } from '../../common/utils/convertDate';

const IssueContent = ({ data }) => {
  return (
    <>
      <TopSection>
        <Avatar src={data.user.avatar_url} alt="user_avatar" />
        <ContentDiv>
          <FirstDiv>
            <div>
              # {data.number}
              <span style={{ paddingRight: '10px' }}></span>
            </div>
            <div style={{ fontWeight: '600' }}> {data.title}</div>
          </FirstDiv>
          <SecondDiv>코멘트: {data.comments}</SecondDiv>
          <ThirdDiv>
            <div>
              작성자: {data.user.login}
              <span style={{ paddingRight: '10px' }}></span>
            </div>
            <div>작성일: {convertDate(data.created_at)}</div>
          </ThirdDiv>
        </ContentDiv>
      </TopSection>
      {/* <section dangerouslySetInnerHTML={{ __html: html }}></section> */}
      <ReactMarkdown children={data.body} />
    </>
  );
};

export default IssueContent;
