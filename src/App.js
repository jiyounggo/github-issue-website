import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Main from './pages/Main/Main.jsx';
import NotFound from './pages/NotFound/NotFound';
import { User } from './context/User';
function App() {
  return (
    <User>
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </User>
  );
}

export default App;
