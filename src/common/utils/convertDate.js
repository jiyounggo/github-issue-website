export const convertDate = issue => {
  return `${new Date(issue.created_at).getFullYear()}년 ${
    new Date(issue.created_at).getMonth() + 1
  }월 ${new Date(issue.created_at).getDate()}일`;
};
