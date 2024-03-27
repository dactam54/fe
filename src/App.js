
import './App.css';
import ManagerLocation from './pages/admin/ManagerLocation';
import { Routes, Route } from 'react-router';
import { path } from './utils/path';
import Login from './pages/public/Login';
import Public from './pages/public/Public';
import Detail from './pages/public/Detail';


function App() {
  return (
    <div>
      <Routes>
        <Route path={path.LOGIN} element={<Login />} >
          {/* <Route path={path.DETAIL} element={<Detail />} /> */}
        </Route>
        <Route path={path.PUBLIC} element={<Public />} />
        <Route path={path.MANAGER_LOCATION} element={<ManagerLocation />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>


  );
}

export default App;
