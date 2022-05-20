import { Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';
import { Route, Routes } from 'react-router-dom';
import { NotFound, PrivateRoute } from './components/Common';
import { AdminLayout } from './components/Layout';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route 
          path='/admin' 
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          } 
        />
        <Route path='*' element = {<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
