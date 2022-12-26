import React from 'react';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
import Account from './components/Account';
import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Remark from './components/Remark';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold -mb-3 mt-3'>
      Marriage Portal
      </h1>
      <div className='flex justify-center mt-5'>
      <hr className="my-1 h-px bg-gray-200 border-0 dark:bg-gray-400 w-1/5"/>
      </div>
      
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route path='/account/registration'
            element={
              <ProtectedRoute>
                <Registration/>
              </ProtectedRoute>
            }
          />
          <Route path='/account/registration/remark'
            element={
              <ProtectedRoute>
                <Remark/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;