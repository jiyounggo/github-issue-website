import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.MAIN} element={<Main />} />
      <Route path={ROUTE.DETAIL} element={<Detail />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
