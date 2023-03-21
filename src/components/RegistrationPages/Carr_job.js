import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import shortid from 'shortid'
import { UserAuth } from '../../context/AuthContext';


const Posts = [
  {
      Public: [
          'CEO',
          'CFO',
          'COO',
          'CTO',
          'VP',
          'Director',
          'Manager',
          'HR Manager',
          'Accountant',
          'Head of Marketing',
          'Head of Sales',
          'Head of Operations',
          'Head of IT',
          'Head of Logistics',
          'Head of Quality Assurance',
          'Head of Research & Development',
          'Head of Legal',
          'Head of Manufacturing',
          'Head of Procurement',
          'Head of Customer Service',
          'Head of Business Development',
          'Head of Human Resources',
          'President',
          'Vice President',
          'Prime Minister',
          'Governor',
          'Chief Minister',
          'MP',
          'MLA',
          'Panchayat Members',
          'Municipal Corporation Members',
          'Supreme Court Judge',
          'High Court Judge',
          'District Court Judge',
          'Civil Servant',
          'Police Officer',
          'Armed Forces Officer',
          'Ambassador/Diplomat',
          'Public Prosecutor',
          'Public Service Commission Member',
          'Head of Education Board',
          'Head of Government Agency',
          'Head of Public Sector Unit',
          'Head of Public Sector Bank',
          'Head of Public Sector Insurance Company',
          'Head of Public Sector Investment Company',
          'Head of Public Sector Research and Development Agency',
          'Head of Media/Press'
      ]
  }
];



const Carrer = () => {

  const [qulification, setQulification] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [post, setPost] = useState("");
  const [income, setIncome] = useState("");

  const {setCurrentStep, userData, setUserData} = UserAuth();
 
  const handleCareer = (e)=>{
    e.preventDefault();
    setUserData({...userData, "qulification" : qulification, "companyType": companyType, "post": post, "income": income})
    setCurrentStep(5)
  }

  const { t } = useTranslation();
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="w-full max-w-lg h-auto">
  
  <form onSubmit={handleCareer} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h1 className='font-mono mb-5 border-l-4 pl-2 border-indigo-500'>{t("Just a few questions about your education & career")}</h1>
  <div className="flex justify-center mb-6 mt-8">
    <div className="inline-block relative w-3/4 px-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold -mb-3" htmlFor="grid-first-name">
    {t("Your highest qualification")}
      </label>
  <select required onChange={(e)=>{setQulification(e.target.value)}} value = {qulification} className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">

  <option ></option>
  <option>Bachelor's Degree </option>
    <option>Postgraduate Diploma </option>
    <option>Master's Degree</option>
    <option>Doctoral Degree</option>
    <option>Advanced Certificate </option>
    <option>National Diploma</option>
    <option>Advanced Diploma</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-10 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className="flex justify-center mb-6 mt-8">
    <div className="inline-block relative w-3/4 px-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold -mb-3" htmlFor="grid-first-name">
    {t("You work with")}
      </label>
  <select onChange={(e)=>{setCompanyType(e.target.value)}} required value = {companyType} className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  
  <option ></option>
  <option>Private Company</option>
    <option>Government / Public Sector</option>
    <option>Defense / Civil Services</option>
    <option>Business / Self Employed</option>
    <option>Not Working</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-10 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className="flex justify-center mb-6 mt-8">
    <div className="inline-block relative w-3/4 px-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold -mb-3" htmlFor="grid-first-name">
    {t("Current Post")}
      </label>
  <select onChange={(e)=>{setPost(e.target.value)}} value={post} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  
  <option ></option>
  {Posts[0].Public.map((elm)=>(
    <option key={shortid.generate()}>{elm}</option>
  ))}
  
    
  
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-10 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className="flex justify-center mb-6 mt-8">
    <div className="inline-block relative w-3/4 px-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold -mb-3" htmlFor="grid-first-name">
    {t("Your Annual Income")}
      </label>
  <select onChange={(e)=>{setIncome(e.target.value)}}  value={income} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  
  <option ></option>
  <option>Upto ₹ 1 Lakh yearly</option>
    <option>₹ 1 to 2 Lakh yearly</option>
    <option>₹ 2 to 4 Lakh yearly</option>
    <option>₹ 4 to 7 Lakh yearly</option>
    <option>₹ 7 to 10 Lakh yearly</option>
    <option>₹ 10 to 15 Lakh yearly</option>
    <option>₹ 15to 20 Lakh yearly</option>
    <option>₹ 20 to 30 Lakh yearly</option>
    <option>₹ 30 to 50 Lakh yearly</option>
    <option>₹ 50 to 75 Lakh yearly</option>
    <option>₹ 75 to 1 crore yearly</option>
    <option>₹ 1 Crore & above yearly</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-10 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className='flex justify-center'>
  <button onClick={()=>{setCurrentStep(3)}} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 bg-gray-50">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  {t("Back")}
  </span>
</button>
  
  <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
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

export default Carrer