import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import IssueList from './pages/IssueList/IssueList';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.MAIN} element={<IssueList />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
