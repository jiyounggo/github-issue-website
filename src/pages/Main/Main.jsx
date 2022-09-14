import { useContext } from 'react';
import { IssueDataContext } from '../../context/IssueData';
import { AdImg, Container } from './Main.style';
import IssueList from '../../components/issueList/IssueList';
import Loading from '../../components/Loading/Loading';

const Main = () => {
  const { IssueData, loading, error } = useContext(IssueDataContext);

  if (loading === true) return <Loading />;
  if (error !== null) return <div>에러가 발생했습니다.</div>;

  return (
    <Container>
      {IssueData?.map((value, index) => {
        if (index === 4) {
          return (
            <a key="a12345" href="https://thingsflow.com/ko/home">
              <AdImg
                src="https://younuk.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbf0a0656-3146-4e9b-8739-7bca3d0d2cb4%2F%25E1%2584%2584%25E1%2585%25B5%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2591%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258B%25E1%2585%25AE_%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25A9_%25E1%2584%2580%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25A7%25E1%2586%25BC.png?table=block&id=23d7e96e-0dbc-4ba3-9e41-c0f22a5ba926&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=2000&userId=&cache=v2"
                alt="광고"
              ></AdImg>
            </a>
          );
        } else {
          return (
            <IssueList
              key={value.id}
              number={value.number}
              title={value.title}
              userId={value.user.login}
              commentsNumber={value.comments}
              created_at={value.created_at.split('T')[0]}
            />
          );
        }
      })}
    </Container>
  );
};

export default Main;
