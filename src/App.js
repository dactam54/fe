
import './App.css';
import ManagerLocation from './pages/admin/ManagerLocation';
import { Routes, Route } from 'react-router';
import path from './utils/path';
import Login from './pages/public/Login';

import Home from './pages/public/Home';
import ManagerUer from './pages/admin/ManagerUser';
import Register from './pages/public/Register';


function App() {
  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} >
          <Route path={path.MANAGER_USER} element={<ManagerUer />} />
        </Route>
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.MANAGER_LOCATION} element={<ManagerLocation />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>


  );
}

export default App;
