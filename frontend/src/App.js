import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AuthState from './context/authState';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';

function Layout() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <AuthState>
      <div data-theme={theme} className='w-full min-h-[100vh]'>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:id?' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
