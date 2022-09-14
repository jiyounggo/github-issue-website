import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Showdown from 'showdown';
import { getIssue } from '../../api/api';

// import { fetchIssueDetail, useIssueDispatch, useIssueState } from '../../context/IssueProvider';

//{ useEffect, useState }

const IssueDetail = () => {
  const { number } = useParams();

  const [issueData, setIssueData] = useState([]);

  async function fetchIssue() {
    const res = await getIssue(number);
    setIssueData(res);
  }

  useEffect(() => {
    fetchIssue();
  }, []);

  // const { detail } = useIssueState();
  // const dispatch = useIssueDispatch();

  // useEffect(() => {
  //   fetchIssueDetail(dispatch, number) //
  //     .then(() => console.info(detail));
  // }, []);

  // 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문

  return (
    <>
      <header>
        <img src={issueData?.user?.avatar_url} alt="" />
        <div>이슈번호: {number}</div>
        <div>이슈 제목: {issueData?.title}</div>
        <div>작성자: {issueData?.user?.login}</div>
        <div>작성일: {issueData?.created_at}</div>
        <div>코멘트수: {issueData?.comments}</div>
      </header>
      <section>이슈내용: {issueData?.body}</section>
    </>
  );
};

export default IssueDetail;
