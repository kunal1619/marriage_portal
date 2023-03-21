import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const NoAccess = () => {
    
    const { user} = UserAuth();
  return (
    <div className='grid place-content-center h-screen'>
      
      
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Sorry! You do not have access of this Page</h5>
 
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{user.email === "admin@abc.com" ? "Only user have access of this tab." : "Only admin have access of this tab"}</p>
    <Link to = {"/account"}>
  
  <span className='transition hover:-translate-x-3 delay-100 text-blue-400  hover:text-blue-500  duration-300 '><KeyboardBackspaceIcon /> Go Back</span>
    </Link>
    
</div>
    </div>
  )
}

export default NoAccess
