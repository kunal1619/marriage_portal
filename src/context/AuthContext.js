import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // ----------------------------handle user------------------------
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([])
  const [tableIndex, setTableIndex] = useState(0)
  
// console.log(userData);
  const submitData=()=>{
    setFinalData(finalData=>[...finalData, userData])
    setUserData('')
    setCurrentStep(1)
  }
// console.log(finalData);
  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData, tableIndex, setTableIndex }}>
      {children}
    </UserContext.Provider>
  );
};

//difining custom hook 

export const UserAuth = () => {
  return useContext(UserContext);
};