import React from 'react';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
import Account from './components/Account';
import Registration from './components/Registration';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Remark from './components/Remark';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import ErrorPage from './components/404Page';

 
 
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
         "Marriage Portal": "Marriage Portal"
         
       }
     },
     hn: {
       translation: {
        'signIn text' : "कैसें है आप",
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
         "Marriage Portal": "विवाह पोर्टल"
         
         
       }
     }
   },
   lng : "hn",
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

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  }, [])

  return (
    <div>
    
      <h1 className='text-center text-3xl font-bold -mb-3 mt-3'>
      {t("Marriage Portal")}
      </h1>
      <div className='flex justify-center mt-5'>
      <hr className="my-1 h-px bg-gray-200 border-0 dark:bg-gray-400 w-1/5"/>
      </div>

      <div>
      <div className = "inline-flex">
  <button className = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={changeLang("en")}>
    Eng
  </button>
  <button className = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={changeLang("hn")}>
  हिंदी
  </button>
</div>
    </div>
      
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route path='/account/registration'
            element={
              <ProtectedRoute>
                <Registration/>
              </ProtectedRoute>
            }
          />
          <Route path='/account/registration/remark'
            element={
              <ProtectedRoute>
                <Remark/>
              </ProtectedRoute>
            }
          />

        <Route path='*' element={<ErrorPage/>}/>
        </Routes>
       
      </AuthContextProvider>
    </div>
  );
}

export default App;