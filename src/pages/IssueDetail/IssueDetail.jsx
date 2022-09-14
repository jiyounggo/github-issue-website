import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIssueDetail, useIssueDispatch, useIssueState } from '../../context/IssueProvider';

//{ useEffect, useState }

const IssueDetail = () => {
  const { number } = useParams();

  // const [issueData, setIssueData] = useState([]);

  // async function fetchIssue() {
  //   const res = await getIssue(number);
  //   setIssueData(res);
  // }

  // useEffect(() => {
  //   fetchIssue();
  // }, []);

  const { detail } = useIssueState();
  const dispatch = useIssueDispatch();

  useEffect(() => {
    fetchIssueDetail(dispatch, number) //
      .then(() => console.info(detail));
  }, []);

  // 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문

  return <>{detail && <div>안녕 {detail.url}</div>}</>;
};

export default IssueDetail;
