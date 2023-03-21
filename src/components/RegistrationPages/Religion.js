import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserAuth } from '../../context/AuthContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Riligion = [
  'Hindu',
  'Muslim',
  'Christian',
  'Jain',
  'Sikh',
  'Buddhist',
  'Parsi',
  'Jewish',
  'Other',
  'No Religion',
];
const Country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function getStyles(name, personName, theme) {
  
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Religion() {
  const theme = useTheme();
  // const [personName, setPersonName] = useState([]);

  // console.log(personName);

  const [religion, setReligion] = useState("")
  const [country, setCountry] = useState("")

  const {setCurrentStep, userData, setUserData} = UserAuth();

  const handleReligion=(e)=>{
    e.preventDefault();
    setUserData({...userData, "religion": religion, "country": country})
    setCurrentStep(4);
    
  }

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  const { t } = useTranslation();

  return (

//     

    <div className='flex justify-center items-center min-h-screen'>
      <div className="w-full max-w-sm h-auto">
  <form onSubmit={handleReligion} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{t("Religion")}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={religion}
          onChange={(e)=>{setReligion(e.target.value)}}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          required
        >
          {Riligion.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, religion, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        
      </FormControl>


  <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{t("Country")}</InputLabel>
        <Select
          // labelId="demo-multiple-name-label"
          // id="demo-multiple-name"
         
          value={country}
          onChange={(e)=>{setCountry(e.target.value)}}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          required
        >
          {Country.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, country, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        
      </FormControl>
    
    <div className="flex items-center justify-center">

    <button onClick={()=>{setCurrentStep(2)}} type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 bg-gray-50">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
  {t("Back")}
  </span>
</button>

    <button  type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
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

export default Religion;
