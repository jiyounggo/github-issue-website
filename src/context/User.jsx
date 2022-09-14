import React, { useEffect, useState, createContext, useCallback, useRef } from 'react';
import Main from '../pages/Main/Main';
import { getApi } from '../api/api';

const MainContext = createContext();

export const User = () => {
  const obsRef = useRef(null); //observer Element
  const [issuesList, setIssuesList] = useState([]); //Post List
  const [page, setPage] = useState(1); //현재 페이지
  const [load, setLoad] = useState(false); //로딩 스피너
  const preventRef = useRef(true); //옵저버 중복 실행 방지
  const endRef = useRef(false); //모든 글 로드 확인

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
    const res = await getApi();
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

  return (
    <MainContext.Provider value={{ load, issuesList, obsRef }}>
      <Main />
    </MainContext.Provider>
  );
};

export default MainContext;
