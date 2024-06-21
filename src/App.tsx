import LATOUT from './layout';
import { Routes, Route } from 'react-router-dom';
import router from './router';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LATOUT />}>
        {router.map(route => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
