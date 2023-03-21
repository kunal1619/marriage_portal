import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useTranslation } from "react-i18next";


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(error)
    }
  };

  const { t } = useTranslation();

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4 background'>
      <div>
        <h1 className='text-2xl font-bold py-2 '>{t("signIn text")}</h1>
        <p className='py-2'>
          {t("dont have acc")}{' '}
          <Link to='/signup' className='underline font-medium'>
            {t("Sign up")}
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>{t("Email Address")}</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' autoComplete='off' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>{t("Password")}</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' autoComplete='off' type='password' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          {t("Sign In")}
        </button>
      </form>
    </div>
  );
};

export default Signin;