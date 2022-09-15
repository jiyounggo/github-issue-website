import React from 'react';
import { TopSection, Avatar, ContentDiv, FirstDiv, SecondDiv, ThirdDiv } from './IssueDetail.style';
import ReactMarkdown from 'react-markdown';
import { convertDate } from '../../common/utils/convertDate';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
      <ReactMarkdown
        children={data.body}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return inline ? (
              <code
                style={{
                  background:
                    'linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )',
                  padding: '2px',
                  borderRadius: '3px',
                }}
                {...props}
              >
                {children}
              </code>
            ) : match ? (
              <SyntaxHighlighter style={nord} language={match[1]} PreTag="div" {...props}>
                {String(children)
                  .replace(/\n$/, '')
                  .replace(/\n&nbsp;\n/g, '')
                  .replace(/\n&nbsp\n/g, '')}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter style={nord} language="textile" PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
          blockquote({ node, children, ...props }) {
            return (
              <div
                style={{
                  background: '#f0f0f0',
                  padding: '1px 15px',
                  borderRadius: '10px',
                }}
                {...props}
              >
                {children}
              </div>
            );
          },
          em({ node, children, ...props }) {
            return (
              <span style={{ 'font-style': 'italic' }} {...props}>
                {children}
              </span>
            );
          },
        }}
      />
    </>
  );
};

export default IssueContent;
