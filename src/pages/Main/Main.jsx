import React from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { REPOSITORY } from '../../common/utils/constant';
import { convertDate } from '../../common/utils/convertDate';

import {
  Comment,
  Container,
  Header,
  IssueContainer,
  IssueSubContent,
  IssueTitle,
  Li,
  LoadingBox,
  MainContainer,
  Title,
} from './Main.style';

function Main() {
  const [repoIssues] = useInfiniteScroll(REPOSITORY.ANGULAR.OWNER, REPOSITORY.ANGULAR.REPO, {
    state: 'open',
    sort: 'comments',
  });
  console.info(repoIssues);

  const loadingArray = new Array(30).fill(0);
  return (
    <Container>
      <Header>
        <Title>Angular / Angular-cli</Title>
      </Header>
      <MainContainer>
        <ol>
          {repoIssues.length > 0
            ? repoIssues.map((issue, index) => (
                <Li key={index}>
                  <IssueContainer>
                    <IssueTitle>
                      #{issue.number} {issue.title}
                    </IssueTitle>
                    <IssueSubContent>
                      작성자: {issue.user.login}, 작성일: {convertDate(issue)}
                    </IssueSubContent>
                  </IssueContainer>
                  <Comment>코멘트:{issue.comments}</Comment>
                </Li>
              ))
            : loadingArray.map(issue => {
                return <LoadingBox></LoadingBox>;
              })}
        </ol>
      </MainContainer>
    </Container>
  );
}

export default Main;
