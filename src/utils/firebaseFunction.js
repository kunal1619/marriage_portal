import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "../firebase.js";


//Saving the new items
export const saveItem = async (data) =>{
    await setDoc(doc(fireStore, "Person Data", `${Date.now()}`), data, {merge:true,})
}
