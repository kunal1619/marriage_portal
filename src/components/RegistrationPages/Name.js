import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { UserAuth } from '../../context/AuthContext';


const Name = () => {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[birth, setBirth] = useState("");

  const {setCurrentStep,userData, setUserData} = UserAuth();


  let handleName=(e)=>{
    e.preventDefault();
    setUserData({...userData,"firstName": firstName, "lastName": lastName, "birth": birth})
    setCurrentStep(2)
  }

  const { t } = useTranslation();
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="w-full max-w-xs">
  <form onSubmit={handleName} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        {t("First Name")}
      </label>
      <input required onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
        {t("Last Name")}
      </label>
      <input required onChange={(e)=>{setLastName(e.target.value)}} value={lastName}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Last Name"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
       {t(" Date-of-birth")}
      </label>
      <input required onChange={(e)=>{setBirth(e.target.value)}} value={birth} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="date"/>
      
    </div>
    <div className="flex justify-center">
    <Link to={'/account'}>
    <button onClick={()=>{setCurrentStep(3)}} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 bg-gray-50">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  {t("Account")}
  </span>
</button>
    </Link>
    

    <button  type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
     {t("Next")}
  </span>
</button>

    
      
    </div>
  </form>
</div>
    </div>
  )
}

export default Name