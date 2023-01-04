import React from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

const Remark = ({handleAlert}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e)=>{
       e.preventDefault();
       handleAlert(input)
       
    }

    const { t } = useTranslation();
  return (
    <div className='flex justify-end items-center h-56'>
        <div className="max-w-lg shadow-md -mt-5">
  <form onSubmit={handleSubmit}  className="w-full p-4">
    <div className="mb-2">
      <label htmlFor ="comment" className="text-lg text-gray-600">{t("Add a Remark")}</label>
      <textarea className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
        name="comment" placeholder="" value={input} onChange={e => setInput(e.target.value)}></textarea>
    </div>
    <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">{t("Submit")}</button>
  </form>
</div>

    </div>
    
  )
}

export default Remark
