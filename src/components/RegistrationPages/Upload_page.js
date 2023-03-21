import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Uploaded = () => {
    
    const {setCurrentStep, submitData} = UserAuth();
  const handleHome=()=>{
    submitData();
  }
  const { t } = useTranslation();

  return (
    <div className='h-screen grid place-content-center'>
      
<div className="max-w-sm bg-gray-50 border border-gray-200 rounded-lg shadow-md">
    <a href="#">
    <img className="rounded-t-lg" src="/Img/backgroundImg.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 font-semibold text-cyan-600 tracking-normal">{t("All Files Has Been Successfully Uploaded")}</h5>
        </a>
        <Link to={"/account"}>
        <button onClick={handleHome} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
      {t("Back To Home")}
  </span>
</button>
        </Link>
        
    </div>
</div>

    </div>
  )
}

export default Uploaded
