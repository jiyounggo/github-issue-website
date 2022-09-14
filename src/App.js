import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import IssueDetail from './pages/IssueDetail/IssueDetail';
// import IssueList from './pages/IssueList/IssueList';
import NotFound from './pages/NotFound/NotFound';
import { UserList } from './context/UserList';
import Main from './pages/Main/Main';

function App() {
  return (
    <UserList>
      <Routes>
        {/* <Route path={ROUTE.MAIN} element={<IssueList />} /> */}
        <Route path={ROUTE.DETAIL_ISSUE} element={<IssueDetail />} />
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </UserList>
  );
}

export default App;
