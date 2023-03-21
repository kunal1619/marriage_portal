import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useTranslation } from 'react-i18next';
import { UserAuth } from '../../context/AuthContext';

export default function Contact() {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const {setCurrentStep, userData, setUserData} = UserAuth();

  const handleContact=(e)=>{
  e.preventDefault();
  setUserData({...userData, "email": email, "phone": phone})
  setCurrentStep(3)
  
  }

  const { t } = useTranslation();
  return (

    <div className='flex justify-center items-center min-h-screen'>
      <div className="w-full max-w-xs">
  <form onSubmit={handleContact} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <Box
      // component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder={t('Email Id')}
          type='email'
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
        />
      
      </div>
    </Box>


  <Box
      // component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='my-4 mx-4'>
      <PhoneInput
      required
      placeholder={t("Enter phone number")}
      value={phone}
      onChange={setPhone}
      />
      </div>
    </Box>
    
    <div className="flex  justify-center">
    <button onClick={()=>{setCurrentStep(1)}} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 bg-gray-50">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  {t("Back")}
  </span>
</button>
    <button type="submit"  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ml-2">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
      {t("Next")}
  </span>
</button>
      

    
    </div>
  </form>
</div>
    </div>
   
  );
}