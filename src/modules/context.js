// import React, { useContext ,useEffect,useReducer} from 'react'
// import reducer from './reducer';

// const AppContext=React.createContext();

// const API="api link";

// const initialState={

//     name:" ",
//     image:" ",

//     courses:[],

// };

// const AppProvider=({children})=>{
//     const [state, dispatch ] = useReducer(reducer, initialState);
//     const updateHomePage=()=>{
//         return dispatch (
//             {
//                 type:"HOME_UPDATE",
//                 payload:{
//                     // info:"HELLO & WELCOME TO ",
//                     name:"REFRESH CODING",
//                     image:"./images/home.jpg",
//                     // des:"Coding is the new fuure and technology is the new world."
//                 },
//             }
//         );
//     };
//     const updateAboutPage=()=>{
//         return dispatch (
//             {
//                 type:"ABOUT_UPDATE",
//                 payload:{
//                     // info:"HELLO  & I am",
//                     name:"MADHLIKA DUBEY",
//                     image:"C:\Users\VISHAL\Desktop\Codelika\codelika\src\images\home.jpg",
//                     // des:"I am a freelancer and corporate trainer having 12 years of experience."
//                 },
//             }
//         );
//     };

//     const getCourses=async(url)=>{
//         try{const res=await fetch(url);
//         const data= await res.json();
//         dispatch({type:"GET_COURSES" ,payload:data})
//     }
//         catch(error){console.log(error);}
//     };

//     useEffect(()=>{
//         getCourses(API);
//     },[]);

//     return (<AppContext.Provider value={{...state , updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>);
// };

// const useGlobalContext=()=>{
//     return useContext(AppContext);
// }

// export {AppProvider, useGlobalContext};

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import about from "../images/home/about.jpeg";

const AppContext = React.createContext();

// const API = "http://localhost:5000/courses";

const API3 = "http://localhost:5000/admin/login";

const intialState = {
  info: "",
  name: "",
  image: "",
  des: "",
  courses: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        info: "Hello  & Welcome to ",
        name: "REFRESH CODING",
        image: about,
        des: " Where coding is the new FUTURE and TECHNOLOGY is the NEW WORLD",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        info: "Hello, I am ",
        name: "MADHULIKA DUBEY",
        image: about,
        des: "Having more than 12 years of experience in Corporate Training and Consulting Full Stack software applications using technologies such as Java, Spring, SpringBootRest, Microservices ,Angular 11,React JS,AWS ,Docker ,Kubernates , with Databases Oracle ,MySQL,Postgres etc. My roles and responsibility includes :- Creating APIs using spring boot(Rest and microservices), API management using Postman, Swagger ,designing UI for the application, bug fixing, Unit testing, Code Reviewing. Also involved in requirement gathering and analysis,I have also written a technical blog on new features of JAVA 8 and 9 .",
      },
    });
  };

  // to call the api 3 data
  const getAdmin = async (url) => {
    try {
      const res = await fetch(url, { method: "get" });
      const data = await res.json();
      dispatch({ type: "GET_ADMIN", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    // getAdmin(API3);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
