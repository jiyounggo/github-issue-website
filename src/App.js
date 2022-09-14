import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import IssueDetail from './pages/IssueDetail/IssueDetail';
import NotFound from './pages/NotFound/NotFound';
import { APIContext } from './context/APIContext';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Error from './pages/Error/Error';
function App() {
  return (
    <APIContext>
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.DETAIL_ISSUE} element={<IssueDetail />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTE.NOT_FOUND} element={<Error />} />
      </Routes>
    </APIContext>
  );
}

export default App;
