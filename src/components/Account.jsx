import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useTranslation } from "react-i18next";
import { admin } from './AdminData';

const Account = () => {
  const { user, logout } = UserAuth();
  // console.log(user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      // console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleRegistration = () => {
    if(user.email !== admin[0].email){
      navigate('/account/registration');
    }else{
      navigate("/account/noaccess")
    }
     
  };
  const handleDashboard = () => {
    if(user.email === admin[0].email){
      navigate('/dashboard');
    }else{
      navigate("/account/noaccess")
    }
     
  };


  const { t } = useTranslation();
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>{t("Account")}</h1>
      <p>{t("User Email:")} {user && user.email}</p>

      <div className='mr-2 mt-3'>
      <button onClick={handleLogout} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("Logout")}</button>

<button onClick={handleRegistration} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("Marriage Registration")}</button>

<button onClick={handleDashboard} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{t("Dashboard")}</button>
      </div>
    
    </div>
  );
};

export default Account;