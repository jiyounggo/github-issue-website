import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import { UserList } from './context/UserList';

function App() {
  return (
    <UserList>
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.DETAIL_ID} element={<Detail />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </UserList>
  );
}

export default App;
