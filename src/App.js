import './App.css';
import ManagerLocation from './pages/admin/ManagerLocation';
import { Routes, Route } from 'react-router';
import path from './utils/path';
import Login from './pages/public/Login';
import Home from './pages/public/Home';
import ManagerUser from './pages/admin/ManagerUser';
import Register from './pages/public/Register';
import ForgotPassword from './pages/public/ForgotPassword';
import Location from './components/Location'
import UserSidebar from './pages/user/UserSidebar';
import AdminSidebar from './pages/admin/AdminSidebar';
import Profile from './pages/user/Profile';
import WishList from './pages/user/WishList';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Routes>

        <Route path={path.HOME} element={<Home />} >

          <Route path={path.USER} element={<UserSidebar />} >
            <Route path={path.PROFILE} element={<Profile />} />
            <Route path={path.FAVORITE_LOCATION} element={<WishList />} />
          </Route>

          <Route path={path.FORGOT_PASSWORD} element={<ForgotPassword />} />

          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.Location} element={<Location />} />
          <Route path={path.LOGIN} element={<Login />} />
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Route>

        <Route path={path.ADMIN} element={<AdminSidebar />} >
          {/* <Route path={path.ADMIN} element={<Home />} /> */}
          <Route path={path.MANAGER_USER} element={<ManagerUser />} />
          <Route path={path.MANAGER_LOCATION} element={<ManagerLocation />} />
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}

        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>


  );
}

export default App;
