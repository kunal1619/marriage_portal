import React from 'react';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Remark from './components/Remark';
import ErrorPage from './components/404Page';
import NoAccess from './components/NoAccess';
import Dashboard from './components/Dashboard/DashbordTable';
import Sidebar from './components/Dashboard/SideBar';
import './App.css'
import About from './components/Dashboard/About/About';
import Heading from './components/Heading';
import Billingual from './components/Billingual';
import PagesRoot from './components/RegistrationPages/PagesRoot';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  
  return (
    <div>
    <AuthContextProvider>
    <div className='flex justify-between'>
    <Heading/>
    <div className='mt-2'>
    <Billingual/>
    </div>
     
    </div>
      <Routes>
          <Route path='/account/registration' element={<ProtectedRoute><PagesRoot/></ProtectedRoute>}/>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          

          <Route path='/dashboard' element={
        <ProtectedRoute>
          <Sidebar>
          <Dashboard/>
      </Sidebar>
        </ProtectedRoute>
        
      }/>
      <Route path='/dashboard/about' element={
        <ProtectedRoute>
          <Sidebar>
          <About/>
      </Sidebar>
        </ProtectedRoute>
        
      }/>
      <Route path='/dashboard/about/remark' element={
        <ProtectedRoute>
          <Sidebar>
          <Remark/>
      </Sidebar>
        </ProtectedRoute>
        
      }/>

        <Route path='/account/noaccess' element={
          <ProtectedRoute>
            <NoAccess/>
          </ProtectedRoute>
        }/>
        </Routes>
    </AuthContextProvider>
     
    </div>
  );
}

export default App;