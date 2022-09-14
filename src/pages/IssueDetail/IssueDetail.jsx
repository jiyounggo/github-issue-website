/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIssue } from '../../api/api';

const IssueDetail = () => {
  // 로딩,에러 ->이미 감싸져서사용되고 있다

  const { number } = useParams();

  const [issueData, setIssueData] = useState([]);

  async function fetchIssue() {
    const res = await getIssue(number);
    setIssueData(res);
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  // 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문

  return (
    <>
      <header>
        {issueData.user && <img src={issueData.user.avatar_url} alt="" />}
        {/* <img src={issueData.user.avatar_url} alt="" /> */}
        <div>이슈번호: {number}</div>
        <div>이슈 제목: {issueData.title}</div>
        {issueData.user && <div>작성자: {issueData.user.login}</div>}
        {/* <div>작성자: {issueData.user.login}</div> */}
        <div>작성일: {issueData.created_at}</div>
        <div>코멘트수: {issueData.comments}</div>
      </header>
      <section>이슈내용: {issueData.body}</section>
    </>
  );
};

export default IssueDetail;
