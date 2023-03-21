// import React from 'react';
// import DetailsThumb from './AboutImg';
// import { saveItem } from '../../../utils/firebaseFunction';
// import { Link } from 'react-router-dom';

// class About extends React.Component{

//   state = {
//     products: [
//       {
//         "_id": "1",
//         "title": "Client Details",
//         "name" : localStorage.getItem("firstName"),
//         "lastName": localStorage.getItem("lastName"),
//         "religion": localStorage.getItem("religion"),
//         "city" : localStorage.getItem("city"),
//         "community" : localStorage.getItem("community"),
//         "marital status" : localStorage.getItem("maritalStatus"),
//         "email" : localStorage.getItem("email"),
//         "with family" : localStorage.getItem("family"),
//         "height" : localStorage.getItem("height"),
//         "country" : localStorage.getItem("country"),
//         "D.O.B" : localStorage.getItem("birth"),
//         "phone" : localStorage.getItem("phone"),
//         "qulification" : localStorage.getItem("qulification"),
//         "companyType" : localStorage.getItem("companyType"),
//         "income" : localStorage.getItem("income"),
//         "post" : localStorage.getItem("post"),
//         "src": [
//             localStorage.getItem("photograph"),
//             localStorage.getItem("addressPhoto"),
//             localStorage.getItem("birthCertificate"),
//             localStorage.getItem("jobLetter")
            
//           ],
        
//       }
//     ],
//     index: 0
//   };

  
//   handleAccept = () => {
//     saveItem(this.state.products[0])
//     localStorage.clear();
    
//   }
  

//   handleReject = () =>{
//     if(this.state.products[0]['name'] !== ""){
//       window.open('/dashboard/about/remark')
//     }else{
//       alert("Add user first")
//     }
    
//   }

  

//   myRef = React.createRef();

//   handleTab = index =>{
//     this.setState({index: index})
//     const images = this.myRef.current.children;
//     for(let i=0; i<images.length; i++){
//       images[i].className = images[i].className.replace("active", "");
//     }
//     images[index].className = "active";
//   };

//   componentDidMount(){
//     const {index} = this.state;
//     this.myRef.current.children[index].className = "active";
//     console.log(this.myRef.current.children);
//   }
  
//   render(){
//     const {products, index} = this.state;
//     return(
//       <div className="app">
//         {
//           products.map(item =>(
//             <div className="details" key={item._id}>
//               <div className="big-img">
//                 <img src={item.src[index]} alt=""/>
//               </div>

//               <div className="box">
//                 <div className="row">
//                   <h2>{item.title}</h2>
//                 </div>
                

//                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-yellow-400 dark:text-gray-50">
//             <tr>
//                 <th scope="col" className="px-6 py-3">
//                    name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     title
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     religion
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     city
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     community
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     marital status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     with family
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     height
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     country
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     D.O.B
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     phone
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     qulification
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     company type
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     post
//                 </th>
                
//                 <th scope="col" className="px-6 py-3">
//                     income
//                 </th>
                
                
//             </tr>
//         </thead>
//         <tbody>
//         <tr className="border-b bg-gray-100 dark:bg-gray-100">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
//                     {item.name}
//                 </th>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.lastName}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.religion}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.city}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.community}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item['marital status']}
//                 </td>
                
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.email}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item['with family']}
//                 </td>
               
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.height}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.country}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item['D.O.B']}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.phone}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.qulification}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.companyType}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.post}
//                 </td>
//                 <td className="px-6 py-4 text-gray-500">
//                     {item.income}
//                 </td>
                
//             </tr>
           
//         </tbody>
//     </table>
// </div>

//                 <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
//                 <button onClick={this.handleAccept} className="cart mr-2">Accept</button>
//                 {/* <Link to={'/dashboard/about/remark'}> */}
//                 <button onClick={this.handleReject} className="cart">Reject</button>
//                 {/* </Link> */}
                

//               </div>
//             </div>
//           ))
//         }
//       </div>
//     );
//   };
// }

// export default About;




import React, { useState } from 'react';
import DetailsThumb from './AboutImg';
import { saveItem } from '../../../utils/firebaseFunction';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import { useTranslation } from 'react-i18next';



const About = () => {

    const {finalData, tableIndex} = UserAuth();

  let state = {
    title : "Client Details",
    details: {
        ...finalData[tableIndex]
      },
    index : 0
  };

  const {details, index} = state;
  

 const [products, setProducts] = useState(details)
 const {birth, city, community, companyType, country, diet, email, family, firstName, height, income , lastName, maritalStatus, phone, post, qulification,religion,src} = products;
 
  const handleref = useRef()

  const navigate = useNavigate();

  const clear = ()=>{
    setProducts({birth:"", city:"", community:"", companyType:"", country:"", diet:"", email:"", family:"", firstName:"", height:"", income :"", lastName:"", maritalStatus:"", phone:"", post:"", qulification:"",religion:"", src :[]})}

  let handleAccept = () => {
    if(firstName !== "" && lastName !== "" && religion !== "" && city !== "" && community !== "" && email !== "" && country !== "" && qulification !== ""){
      saveItem(products)
        alert("Data Uploaded successfully ! 👍")
        finalData.splice(tableIndex,1)
        clear()
        setTimeout(() => {
            navigate("/dashboard")
        }, 2000);
    }else{
      alert("Add User's all details")
    }
        
      }
      
     let handleReject = () =>{
        if(firstName !== "" && lastName !== "" && religion !== "" && city !== "" && community !== "" && email !== "" && country !== "" && qulification !== ""){
          navigate('/dashboard/about/remark')
          finalData.splice(tableIndex,1)
          clear();
        }else{
          alert("Add user first")
        }
        
      }

  const [num, setNum] = useState(0)

  
  
  const handleTab = (index) =>{
       setNum(index)
       const images = handleref.current.children;
       for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
      };

      useEffect(()=>{
        handleref.current.children[index].className = "active";
       
      },[index])
     
      const { t } = useTranslation();
  return (
    <div className="app">
         
             <div className="details -mt-8" >
               <div className="big-img">
                 <img src={src[num]} alt=""/>
               </div>

               <div className="box">
                 <div className="row">
                   <h2>{state['title']}</h2>
                 </div>
                

                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-yellow-400 dark:text-gray-50">
             <tr>
                 <th scope="col" className="px-6 py-3">
                    {t("name")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("title")}
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
                     {t("marital status")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("dite")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("email")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("with family")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("height")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("country")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     D.O.B
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("phone")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("qulification")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("company type")}
                 </th>
                 <th scope="col" className="px-6 py-3">
                     {t("post")}
                 </th>
                
                 <th scope="col" className="px-6 py-3">
                     {t("income")}
                 </th>
                
                
             </tr>
         </thead>
         <tbody>
         <tr className="border-b bg-gray-100 dark:bg-gray-100">
                 <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                     {firstName}
                 </th>
                 <td className="px-6 py-4 text-gray-500">
                     {lastName}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {religion}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {city}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {community}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {maritalStatus}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {diet}
                 </td>
                
                 <td className="px-6 py-4 text-gray-500">
                     {email}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {family}
                 </td>
               
                 <td className="px-6 py-4 text-gray-500">
                     {height}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {country}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {birth}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {phone}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {qulification}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {companyType}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {post}
                 </td>
                 <td className="px-6 py-4 text-gray-500">
                     {income}
                 </td>
                
             </tr>
           
         </tbody>
     </table>
 </div>

                 <DetailsThumb images={src} tab={handleTab} handleref={handleref} />
                 

                 <button onClick={handleAccept} className="cart mr-2">{t("Accept")}</button>
                 
                 <button onClick={handleReject} className="cart">{t("Reject")}</button>
                 
                

               </div>
             </div>
           
       </div>
  )
}

export default About
