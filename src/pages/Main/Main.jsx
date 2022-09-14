import React, { useContext } from 'react';
import { Container } from './Main.style';
import MainContext from '../../context/User';

function Main() {
  const { load, issuesList, obsRef } = useContext(MainContext);
  console.info(issuesList);
  return (
    <Container>
      {issuesList &&
        issuesList.map((user, index) => (
          <ul key={user.id}>
            <li> #{user.number}</li>
            <li>{user.title}</li>
            <li>{user.comments}</li>
            <li>{user.created_at}</li>
            <li>{user.user.login}</li>
          </ul>
        ))}
      {load ? <div>로딩중</div> : ''}
      <li className="" ref={obsRef}></li> // 옵저버
    </Container>
  );
}

export default Main;
