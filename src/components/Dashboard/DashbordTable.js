import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Dashboard = () => {
    
    const {finalData, setTableIndex} = UserAuth();
    const { t } = useTranslation();
  return (
    <div>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {t("name")}
                </th>
                <th scope="col" className="px-6 py-3">
                    {t("religion")}
                </th>
                <th scope="col" className="px-6 py-3">
                    {t("city")}
                </th>
                <th scope="col" className="px-6 py-3">
                    {t("community")}
                </th>
                <th scope="col" className="px-6 py-3">
                    {t("view")}
                </th>
                
            </tr>
        </thead>
        <tbody>
        {finalData.map((elm, index)=>(
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700" key={elm.phone}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {elm.firstName} {elm.lastName}
                </th>
                <td className="px-6 py-4">
                    {elm.religion}
                </td>
                <td className="px-6 py-4">
                    {elm.city}
                </td>
                <td className="px-6 py-4">
                    {elm.community}
                </td>
                <td className="px-6 py-4">
                <NavLink className={({ isActive }) => isActive? "active": ''} to={'/dashboard/about'} >
                <button onClick={()=>{setTableIndex(index)}} className="font-medium text-cyan-500 hover:underline">{t("Details")}</button>
                </NavLink>
                    
                </td>
            </tr>
        ))}
        
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Dashboard