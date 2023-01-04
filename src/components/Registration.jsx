import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {MdTitle,MdReduceCapacity,MdAccountCircle,MdCastForEducation,MdHeight, MdCloudUpload, MdDelete} from "react-icons/md";

import Loader from "./Loader";
import {deleteObject,getDownloadURL,ref,uploadBytesResumable} from "firebase/storage";
import { storage } from "../firebase";
import { saveItem } from "../utils/firebaseFunction";
import Remark from "./Remark";
import { useTranslation } from "react-i18next";
import { UserAuth } from "../context/AuthContext";
import { async } from "@firebase/util";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [title, setTitle] = useState("");
  const [religion, setReligion] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [height, setHeight] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false); //this is to display if any error
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const {logout} = UserAuth();
  


  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0]; // 0 means only one file
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) =>{
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100; //this every thing available on firebase doc how to uplaod data in
      }, //firebase storage
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error whle uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () => {
    //deleting the image from firebase storage
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !imageAsset || !religion || !age || !education || !height ) {
        setFields(true);
        setMsg("Error whle uploading : Try Again");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          religion : religion,
          age : age,
          education : education,
          height : height,
          
        };

        saveItem(data);           //after creating the data save it in firebaseFunction

        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully");
        setAlertStatus("success");
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setMsg("Error whle uploading : Try Again");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(true);
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    
  };
  const clearData = () => {
    
    setTitle("");
    setImageAsset(null);
    setReligion("");
    setAge("");
    setEducation("");
    setHeight("");
  };

  let handleReject=()=>{
    setIsShown(current => !current);
    setIsLoading(false);
        clearData();
  }

  let handleAlert=(data)=>{
    setIsShown(current => !current);
    setAlertStatus("danger")
     setIsLoading(false);
        setFields(true);
        setMsg(`Reason : ${data}`)
        setTimeout(() => {
          setFields(false);
        }, 4000);
  }
const navigate = useNavigate();
  const handleLogout = async ()=>{
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }

  const { t } = useTranslation();

  return (
    <div>
    <div className="flex justify-end">
    <button onClick={handleLogout} className='bg-white mx-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        {t("Logout")}
      </button>
    </div>
     
      <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
     
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {" "}
            {msg}{" "}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdTitle className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("Full Name")}
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor"
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option value="other" className="bg-white">
              {t("Select Category")}
            </option>
            
                <option className="text-base border-0 outline-none capitalize bg-white text-headingColor">
                  {t("Male")}
                </option>
                <option className="text-base border-0 outline-none capitalize bg-white text-headingColor">
                  {t("Female")}
                </option>
              
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 text-3xl hover:text-gray-700">
                        {t("Upload Document")}
                      </p>
                    </div>

                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdReduceCapacity className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder={t("Religion")}
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAccountCircle className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder={t("Age")}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdCastForEducation className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder={t("Education")}
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdHeight className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              placeholder={t("Height")}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        <div className="relative flex py-5 items-center">
         <div className="flex-grow border-dashed border-t w-60 border-blue-600"></div>
             <span className="flex-shrink mx-4 text-gray-400">{t("For official use(r1)")}</span>
        <div className="flex-grow border-dashed border-t w-60 border-gray-400"></div>
          </div>
        <div className="flex items-center w-full">
        
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold "
            onClick={saveDetails}
          >
            {t("Accept")}
          </button>
          
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold "
            onClick={handleReject}
          >
            {t("Reject")}
          </button>
         
          
        </div>
        {isShown && (
        <div>
          <Remark handleAlert = {handleAlert}/>
        </div>
      )}
      </div>
     
    </div>
    </div>
    
    
  );
};


export default Registration
