import React, { createContext, useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

function UserList(props) {
  const [issuesList, setIssuesList] = useState([]);

  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);
  const preventRef = useRef(true);
  const obsRef = useRef(null);
  const endRef = useRef(false);

  useEffect(() => {
    //옵저버 생성
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getList();
  }, [page]);

  const obsHandler = entries => {
    //옵저버 콜백함수
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage(prev => prev + 1); //페이지 값 증가
    }
  };

  const getList = useCallback(async () => {
    //글 불러오기
    setLoad(true); //로딩 시작
    // ---- Get Data Code ---
    const res = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_URL}`,
      headers: {
        Accept: 'application / vnd.github + json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    });
    if (res.data) {
      if (res.data.end) {
        //마지막 페이지일 경우
        endRef.current = true;
      }
      setIssuesList(prev => [...prev, ...res.data]); //리스트 추가
      preventRef.current = true;
    } else {
      console.info(res); //error
    }

    setLoad(false); //로딩 종료
  }, [page]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}`)
  //     .then(res => {
  //       setIssuesList(res.data);
  //     })
  //     .catch(err => console.info(err));
  // }, []);

  return (
    <UserContext.Provider value={{ load, issuesList, setIssuesList, obsRef }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserList;
