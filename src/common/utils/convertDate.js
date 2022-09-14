export const convertDate = created_at => {
  return `${new Date(created_at).getFullYear()}년 ${
    new Date(created_at).getMonth() + 1
  }월 ${new Date(created_at).getDate()}일`;
};
