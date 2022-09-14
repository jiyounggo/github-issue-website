import {
  Li,
  IssueContainer,
  IssueTitle,
  IssueSubContent,
  Comment,
  Image,
  Anchor,
  Banner,
} from './Issues.style';

const Issues = ({ data: list }) => {
  return (
    <ol>
      {list?.map((issue, idx) => {
        const date = issue.created_at;
        const newDate = date.split('T')[0];
        if (idx === 5) {
          return (
            <Anchor href="https://thingsflow.com/ko/home" key={'banner'}>
              <Banner>
                <Image
                  src="https://younuk.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbf0a0656-3146-4e9b-8739-7bca3d0d2cb4%2F%25E1%2584%2584%25E1%2585%25B5%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2591%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258B%25E1%2585%25AE_%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25A7%25E1%2586%25BC.png?table=block&id=23d7e96e-0dbc-4ba3-9e41-c0f22a5ba926&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=2000&userId=&cache=v2"
                  alt="로고"
                />
                <IssueTitle>things flow에 방문해 보세요!</IssueTitle>
              </Banner>
            </Anchor>
          );
        }
        return (
          <Li key={issue.id}>
            <IssueContainer>
              <IssueTitle>
                #{issue.number} {issue.title}
              </IssueTitle>
              <IssueSubContent>
                작성자: {issue.user.login}, 작성일: {newDate}
              </IssueSubContent>
            </IssueContainer>
            <Comment>코멘트:{issue.comments}</Comment>
          </Li>
        );
      })}
    </ol>
  );
};

export default Issues;
