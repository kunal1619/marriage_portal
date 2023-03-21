import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import shortid from 'shortid'
import { UserAuth } from '../../context/AuthContext';

const category = [
  "Agrawal",
  "Iyengar",
"Iyer",
  "Kayastha",
  "Khatri",
  "Maratha",
"  Nair",
  "Rajput",
"  Shia",
  "Sunni",
"A",
"  Agri",
"  Ahom",
  "Anavil Brahmin",
  "Arora",
  "Arya Vysya",
  
"B",
"  Bahi",
  "Baidya",
  "Baishnab",
  "Baishya",
  "Balija Naidu",
  "Baniya",
  "Barujibi",
  "Bengali Brahmin",
  "Bengali Kayastha",
  "Besta",
  "Bhandari",
  "Bhatia",
  "Bhovi",
  "Billava",
  "Born Again",
  "Brahmin",
  "Brahmin Bhumihar",
  "Brahmin Deshastha",
  "Brahmin Goswami",
  "Brahmin Kanada Madhva",
  "Brahmin Karhade",
  "Brahmin Kokanastha",
  "Brahmin Smartha",
  "Brahmin Tyagi",
  "Brahmin Vaidiki",
"  Bunt",
  
"C",
  "Catholic",
  "Chambhar",
  "Chaurasia",
  
"D",
  "Dawoodi Bohra",
  "Desai",
  "Devanga",
  "Dhangar",
  "Dheevara",
  "Dhobi",
  
  
  "E",
  "Ediga",
  "Ehle",
  "Evangelical",
  "Ezhava",
  "Ezhuthachan",
  
"F",
  "Coming Soon",
  
"G",
  "Ganiga",
  "Garhwali Brahmins",
  "Garhwali Rajput",
  "Gomantak Maratha",
"  Goud",
  "Gounder",
  "Gour Brahmin",
  "Gowd Saraswat Brahmin",
  "Gowda",
  "Gramani",
  "Gudia",
  "Gujarati Brahmin",
  "Gujarati Lohana",
  "Gujarati Vaishnav",
  "Gupta",
  
"H",
  "Hadith",
  "Havyaka Brahmin",
  "Hindi Agarwal",
  "Hindi Arora",
  "Hindi Brahmin",
  "Hindi Kayastha",
  "Hindi Khatri",
  "Hindi Rajput",
  
"I",
  "Coming Soon",
  
"J",
  "Jacobite",
  "Jain",
  "Jain Digambar",
  "Jain Shwetamber",
  "Jaiswal",
  "Jat",
  
"K",
  "Kaibarta",
  "Kalar",
  "Kalinga Vysya",
  "Kalita",
  "Kamboj",
  "Kamma",
  "Kannada Bunt",
  "Kannada Lingayat",
"  Kapu",
  "Kapu Naidu",
  "Karana",
  "Kashyap",
  "Khandelwal",
"  Koli",
  "Kori",
  "Kshatriya",
  "Kulalar",
  "Kumbhakar",
  "Kumbhar",
  "Kumhar",
  "Kunbi",
  "Kuruba",
  "Kuruhina Shetty",
  
  
  "L",
  "Leva",
  "Leva Patil",
  "Lingayat",
  "Lohana",
  
  
  "M",
  "Madiga",
  "Mahar",
  "Maharashtrian",
  "Maheshwari",
  "Mahishya",
  "Mala",
  "Malayalam Menon",
  "Malayalam Nair",
  "Malayalam Nambiar",
  "Malayalam Pillai",
  "Mangalorean",
  "Marathi Brahmin",
  "Marathi CKP",
  "Marthoma",
  "Marwari",
  "Marwari Agarwal",
  "Maurya",
  "Meenavar",
  "Memon",
  "Menon",
  "Mogaveera",
  "Mudaliar Arcot",
  "Mudiraj",
  "Muthuraja",
  
  
  "N",
  "Nadar",
  "Naicker",
  "Naidu",
  "Nambiar",
  "Nepali",
  
  
  "O",
  "OBC",
  "Oswal",
  
  "P",
  "Panchal",
  "Panicker",
  "Patel",
  "Patel Kadava",
  "Patel Leva",
  "Perika",
  "Pillai",
  "Prajapati",
  "Protestant",
  "Punjabi",
  "Punjabi Agarwal",
  "Punjabi Arora",
  "Punjabi Brahmin",
  "Punjabi Brahmin Saraswat",
  "Punjabi Khatri",
  "Punjabi Kshatriya",
  
  ]

const Data = () => {
  const [city, setCity] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [diet, setDiet] = useState("")
  const [height, setHeight] = useState("")
  const [family, setFamily] = useState("")
  const [community, setCommunity] = useState("")
  
  const {setCurrentStep , userData, setUserData} = UserAuth();

  const handleData=(e)=>{
    e.preventDefault();
    setUserData({...userData, "city": city, "maritalStatus": maritalStatus, "diet": diet, "height" : height, "family": family, "community": community})
    setCurrentStep(6)
    
  }

  const { t } = useTranslation();
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="w-full max-w-md h-auto">
  
  <form onSubmit={handleData} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="flex justify-center mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
        {t("Enter your city name")}
      </label>
      <input required onChange={(e)=>{setCity(e.target.value)}} value={city} className="appearance-none block w-full text-gray-600 border-b-2 border-gray-600 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-white" type="text" placeholder="Banglore"/>
     
    </div>
    <div className="inline-block relative w-56 px-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
    {t("Your marital status")}
      </label>
  <select  onChange={(e)=>{setMaritalStatus(e.target.value)}} value={maritalStatus} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  <option></option>
  <option>Never married</option>
    <option>Married</option>
    <option>Divorced</option>
    <option>Widowed</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-8 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className="flex justify-center mb-6">
  <div className="inline-block relative w-56 px-3 -mx-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
    {t("Your diet")}
      </label>
  <select onChange={(e)=>{setDiet(e.target.value)}} value={diet} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  <option></option>
  <option>Veg</option>
    <option>Non-Veg</option>
    <option>Occasionally Non-Veg</option>
    <option>Eggetarian</option>
    <option>Vegan</option>
    <option>Jain</option>
  </select>

  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-8 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
    <div className="inline-block relative w-56 px-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
    {t("Your Height")}
      </label>
  <select onChange={(e)=>{setHeight(e.target.value)}} value={height} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  <option></option>
    <option>4’6” feet</option>
    <option>4’7” feet</option>
    <option>4’8” feet</option>
    <option>4’9” feet</option>
    <option>4’10” feet</option>
    <option>4’11” feet</option>
    <option>5’0” feet</option>
    <option>5’1” feet</option>
    <option>5’2” feet</option>
    <option>5’3” feet</option>
    <option>5’4” feet</option>
    <option>5’5” feet</option>
    <option>5’6” feet</option>
    <option>5’7” feet</option>
    <option>5’8” feet</option>
    <option>5’9” feet</option>
    <option>5’10” feet</option>
    <option>5’11” feet</option>
    <option>6’0” feet</option>
    <option>6’1” feet</option>
    <option>6’2” feet</option>
    <option>6’3” feet</option>
    <option>6’4” feet</option>
    <option>6’5” feet</option>
    <option>6’6” feet</option>
    <option>6’7” feet</option>
    <option>6’8” feet</option>
    <option>6’9” feet</option>
    <option>6’10” feet</option>
    <option>6’11” feet</option>
    <option>7’0” feet</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-8 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className="flex justify-center mb-6">
  <div className="inline-block relative w-56 px-3 -mx-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
    {t("You live with your family?")}
      </label>
  <select onChange={(e)=>{setFamily(e.target.value)}} value={family} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  <option></option>
    <option>Yes</option>
    <option>No</option>
  </select>

  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-8 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
    <div className="inline-block relative w-56 px-3 -mx-3">
    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
    {t("Your sub-community*")}

      </label>
  <select onChange={(e)=>{setCommunity(e.target.value)}} value={community} required className="block text-gray-600 appearance-none w-11/12 bg-white border-b-2 border-gray-600 hover:border-gray-500 px-4 py-2 pr-8  leading-tight focus:outline-none mt-4">
  <option></option>
  {category.map((elm)=>(
    <option key={shortid.generate()}>{elm}</option>
  ))}
  
  </select>

  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
    <svg className="fill-current h-4 w-4 -ml-8 mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  </div>
  <div className='flex justify-center'>
  <button onClick={()=>{setCurrentStep(4)}} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 bg-gray-50">
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

export default Data