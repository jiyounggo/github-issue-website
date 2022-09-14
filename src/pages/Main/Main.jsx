import React, { useContext } from 'react';
import { Container } from './Main.style';
import MainContext from '../../context/User';

function Main() {
  const { load, issuesList, obsRef } = useContext(MainContext);

  return (
    <Container>
      {issuesList &&
        issuesList.map((user, idx) => (
          <ul key={user.id}>
            {idx === 5 && (
              <a href="https://thingsflow.com/ko/home">
                <img
                  style={{
                    width: '100px',
                  }}
                  src={'/이미지.png'}
                />
              </a>
            )}
            <li> #{user.number}</li>
            <li>{user.title}</li>
            <li>{user.comments}</li>
            <li>{user.created_at}</li>
            <li>{user.user.login}</li>
          </ul>
        ))}
      {load && <div>로딩중</div>}
      <li ref={obsRef}></li>
      {/* // 옵저버 */}
    </Container>
  );
}

export default Main;
