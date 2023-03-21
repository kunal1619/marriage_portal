import React from 'react'
import { useTranslation } from 'react-i18next'

const Heading = () => {
    const { t } = useTranslation();
  return (
    <div className='flex justify-center'>
      
<h1 className="mb-4 text-2xl font-extrabold text-gray-400 md:text-3xl lg:text-4xl border-l-4 border-cyan-600 ml-3 pl-3 py-0 mt-2"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{t("Marriage")}</span> {t("Portal")}</h1>


    </div>
  )
}

export default Heading
