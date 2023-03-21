import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { UserAuth } from '../../context/AuthContext';

const Doccument = () => {

    const [photo, setPhoto] = useState("")
    const [address, setAddress] = useState("")
    const [birstCertificate, setBirthCertificate] = useState("")
    const [jobLetter, setJobLetter] = useState("")

    const {setCurrentStep, userData, setUserData} = UserAuth();
    

  const handleDoccument=(e)=>{
    e.preventDefault();
    setUserData({...userData, "src" : [photo, address, birstCertificate, jobLetter]})
    setCurrentStep(7)
    
  }

  const handlePhoto = (file)=>{
    const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            setPhoto(reader.result)
        })
        reader.readAsDataURL(file);
  }
  const handleAddress = (file)=>{
    const reader = new FileReader();
        reader.addEventListener('load', ()=>{
          
            setAddress(reader.result)
        })
        reader.readAsDataURL(file);
  }
  const handleBirthCertificaate = (file)=>{
    const reader = new FileReader();
        reader.addEventListener('load', ()=>{
       
            setBirthCertificate(reader.result)
        })
        reader.readAsDataURL(file);
  }
  const handlejobLetter = (file)=>{
    const reader = new FileReader();
        reader.addEventListener('load', ()=>{
         
            setJobLetter(reader.result)
        })
        reader.readAsDataURL(file);
  }
  const { t } = useTranslation();
  return (
   <div className='flex min-h-screen justify-center items-center'>
    <div className="w-full max-w-sm p-4 bg-gray-100 border  rounded-lg shadow-md sm:p-6 md:p-8 ">
    <form onSubmit={handleDoccument} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-700 border-l-4 pl-2 border-indigo-500 w-fit">{t("Upload All Necessary Documents")}</h5>
        <div>  
         <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">{t("Photograph")}</label>
         <input onChange={(e)=>{handlePhoto(e.target.files[0])}} required=""  className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-yellow-400 dark:text-gray-50 border-none dark:placeholder-gray-400 p-1" aria-describedby="file_input_help" id="file_input" type="file"/>
         

        </div>
        <div>  
         <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">{t("Address Proof")}</label>
         <input onChange={(e)=>{handleAddress(e.target.files[0])}} required className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-yellow-400 dark:text-gray-50 border-none dark:placeholder-gray-400 p-1" aria-describedby="file_input_help" id="file_input" type="file"/>
         

        </div>
        <div>  
         <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">{t("Birth Certificate")}</label>
         <input onChange={(e)=>{handleBirthCertificaate(e.target.files[0])}} required className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-yellow-400 dark:text-gray-50 border-none dark:placeholder-gray-400 p-1" aria-describedby="file_input_help" id="file_input" type="file"/>
         

        </div>
        <div>  
         <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="file_input">{t("Job Confirmation Letter")}</label>
         <input onChange={(e)=>{handlejobLetter(e.target.files[0])}} required className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-yellow-400 dark:text-gray-50 border-none dark:placeholder-gray-400 p-1" aria-describedby="file_input_help" id="file_input" type="file"/>
         

        </div>
        
        <div className='flex justify-center'>

        <button onClick={()=>{setCurrentStep(5)}} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 bg-gray-50">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  {t("Back")}
  </span>
</button>
        
        <button onClick={handleDoccument} type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
      {t("Submit")}
  </span>
</button>
        
        </div>
        
        
    </form>
</div>
   </div> 


  )
}

export default Doccument
