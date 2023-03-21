import React from 'react'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

i18n
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: {
         'signIn text' : "Sign in to your account",
         'dont have acc' : "Don't have an account yet?",
         'Sign up' : 'Sign up.',
         'Sign In' : 'Sign In',
         'Sign up for a free account':'Sign up for a free account',
         'Already have an account yet?':'Already have an account yet?',
         'Sign in.':'Sign in.',
         'Email Address':'Email Address',
         'Password':'Password',
         'Sign Up':'Sign Up',
         'Account' : 'Account',
         'User Email:' : 'User Email:',
         'Logout:' : 'Logout',
         'Marriage Registration:' : 'Marriage Registrationt',

         "Add a Remark" : "Add a Remark",
         "Submit" : "Submit",
         "Full Name" : "Full Name",
         "Select Category" : "Select Category",
         "Male" : "Male",
         "Female" : "Female",
         "Upload Document" : "Upload Document",
         "Religion" : "Religion",
         "Age" : "Age",
         "Education" : "Education",
         "Height" : "Height",
         "Logout" : "Logout",
         "Marriage Registration" : "Marriage Registration",
         "For official use(r1)": "For official use(r1)",
         "Accept" : "Accept",
         "Reject" : "Reject",
         "Marriage Portal": "Marriage Portal",
         "name" : "name",
         "religion" : "religion",
         "city" : "city",
         "community" : "community",
         "view" :  "view",
         "Details" : "Details",
         "Dashboard" : "Dashboard",
         "Home" : "Home" ,
         "Account" : "Account",
         
         "Logo" : "Logo",
         "title" : "title",
         
         
         "marital status" : "marital status",
         "email" : "email",
         "with family" : "with family",
         "height" : "height",
         "country" :  "country",
         "phone" :  "phone",
         "Your Marriage Application Is Reject" : "Your Marriage Application Is Reject",
         "View more" : "View more",
         "Dismiss" : "Dismiss",
         "First Name" :  "First Name" ,
         "Last Name" : "Last Name",
         "Date-of-birth" :  "Date-of-birth" ,
         "Next" : " Next",
         "Religion" :  "Religion" ,
         "Country" : "Country",
         "Email Id" :  "Email Id" ,
         "Enter phone number" :  "Enter phone number" ,
         "Upload All Necessary Documents" :  "Upload All Necessary Documents" ,
         "Photograph" : "Photograph",
         "Address Proof" :  "Address Proof" ,
         "Birth Certificate" :  "Birth Certificate" ,
         "Job Confirmation Letter" :  "Job Confirmation Letter" ,
         "Submit" :  "Submit" ,
         "Your sub-community*" :   "Your sub-community*" ,
         "You live with your family?" :  "You live with your family?" ,
         "Your Height":  "Your Height",
         "Your diet": "Your diet",
         "Your marital status": "Your marital status",
         "Enter your city name": "Enter your city name",
         "Your Annual Income": "Your Annual Income",
         "Current Post" : "Current Post",
         "You work with": "You work with",
         "Your highest qualification": "Your highest qualification",
         "a few questions about your education & career": "a few questions about your education & career",
         "All Files Has Been Successfully Uploaded": "All Files Has Been Successfully Uploaded",
         "Back To Home": "Back To Home",
         "Just a few questions about your education & career": "Just a few questions about your education & career",
         "Back" : "Back"
         

       }
     },
     hn: {
       translation: {
        'signIn text' : "अपने अकाउंट में साइन इन करें",
         'dont have acc' : "अब तक कोई खाता नहीं है?",
         'Sign up' : 'साइन अप करें',
         'Email Address' : 'ईमेल पता',
         'Sign In' : 'साइन इन करें',
         'Sign up for a free account':'निःशुल्क खाते के लिए साइन अप करें',
         'Already have an account yet?':'पहले से ही एक खाता है?',
         'Sign in.':'साइन इन करें',
         'Password':'कुंजिका',
         'Sign Up':'साइन अप करें',
         'Account' : 'खाता',
         'User Email:' : 'उपयोगकर्ता ईमेल:',
         'Logout:' : 'लॉग आउट',
         'Marriage Registration:' : 'विवाह पंजीकरण टी',
         "Add a Remark" : "एक टिप्पणी जोड़ें",
         "Submit" : "प्रस्तुत",
         "Full Name" : "पूरा नाम",
         "Select Category" : "श्रेणी का चयन करें",
         "Male" : "नर",
         "Female" : "मादा",
         "Upload Document" : "दस्तावेज़ अपलोड करें",
         "Religion" : "धर्म",
         "Age" : "आयु",
         "Education" : "शिक्षा",
         "Height" : "ऊंचाई",
         "Logout" : "लॉग आउट",
         "Marriage Registration" : "विवाह पंजीकरण टी",
         "For official use(r1)": "कार्यालय के प्रयोग हेतु(r1)",
         "Accept" : "स्वीकार करें",
         "Reject" : "अस्वीकार",
         "Marriage": "विवाह",
         "Portal": "पोर्टल",
         "First Name" : "पहला नाम",
         "Last Name" : "उपनाम",
         "Date-of-birth" : "जन्म की तारीख",
         "Next" : "अगला",
         "Religion" : "धर्म",
         "Country" : "देश",
         "Email Id" : "ईमेल आईडी",
         "Enter phone number" : "फोन नंबर दर्ज",
         "Upload All Necessary Documents" : "सभी आवश्यक दस्तावेज अपलोड करें",
         "Photograph" : "फोटो",
         "Address Proof" : "निवास प्रमाण पत्र",
         "Birth Certificate" : "जन्म प्रमाणपत्र",
         "Job Confirmation Letter" : "नौकरी की पुष्टि पत्र",
         "Submit" : "प्रस्तुत करना",
         "Your sub-community*" : "आपका उप-समुदाय*",
         "You live with your family?" : "आप अपने परिवार के साथ रहते हैं?",
         "Your Height": "आपकी लम्बाई",
         "Your diet":"आपका आहार",
         "Your marital status":"तुम्हारी वैवाहिक स्थिति",
         "Enter your city name":"अपने शहर का नाम दर्ज करें",
         "Your Annual Income":"आपकी वार्षिक आय",
         "Current Post":"वर्तमान पोस्ट",
         "You work with":"आप के साथ काम",
         "Your highest qualification":"आपकी सर्वोच्च योग्यता",
         "a few questions about your education & career":"आपकी शिक्षा और करियर के बारे में कुछ सवाल",
         "All Files Has Been Successfully Uploaded":"सभी फ़ाइलें सफलतापूर्वक अपलोड कर दी गई हैं",
         "Back To Home":"मुख्य पृष्ठ पर वापस",
         "name" :"नाम",
         "religion":"धर्म",
         "city": "शहर",
         "community":"समुदाय",
         "view":"दृश्य",
         "Details": "विवरण",
         "Dashboard": "डैशबोर्ड",
         "Home":  "होम",
         "Account": "खाता",
         "Logout": "लॉगआउट",
         "Logo" :  "लोगो",
         "title" : "शीर्षक",
         "city" :  "शहर ",
         "marital status" : " वैवाहिक स्थिति ",
         "email" : " ईमेल ",
         "with family" : " परिवार के साथ ",
         "height" : " ऊंचाई ",
         "country" : " देश ",
         "phone" : " फोन ",
         "Your Marriage Application Is Reject" : " आपका विवाह आवेदन अस्वीकार है ",
         "View more" :  " और देखें ",
         "Dismiss": " खारिज करें ",
         "Just a few questions about your education & career" : "आपकी शिक्षा और करियर के बारे में बस कुछ सवाल",
         "Back" : "पीछे"

                   
         
         
       }
     }
   },
   lng : "en",
   fallbackLng : "en",

   interpolation: {
    escapeValue: false 
  }

 });

 const changeLang = (l)=>{
  
  return ()=>{
   
    i18n.changeLanguage(l);
    localStorage.setItem('lang',l);
  }
  }

const Billingual = () => {
    const { t } = useTranslation();

  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  }, [])
  return (
    <div>
      <div className='ml-2 w-fit'>
      <div className = "inline-flex">
      <button onClick={changeLang("en")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-50 rounded-md group-hover:bg-opacity-0">
      Eng
  </span>
</button>
      <button onClick={changeLang("hn")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-50 rounded-md group-hover:bg-opacity-0">
  हिंदी
  </span>
</button>
  
</div>
    </div>
    </div>
  )
}

export default React.memo(Billingual)
