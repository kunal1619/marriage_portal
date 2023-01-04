import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useTranslation } from "react-i18next";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleRegistration = () => {
    
      navigate('/account/registration');
     
  };
  const { t } = useTranslation();
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>{t("Account")}</h1>
      <p>{t("User Email:")} {user && user.email}</p>

      <button onClick={handleLogout} className='bg-white mx-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        {t("Logout")}
      </button>
      <button onClick={handleRegistration} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
      {t("Marriage Registration")}
      </button>
    </div>
  );
};

export default Account;