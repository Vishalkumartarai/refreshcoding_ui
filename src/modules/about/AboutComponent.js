// import React,{useEffect}from 'react'
// import HomeComponent from '../home/HomeComponent'
// import { useGlobalContext } from '../context';

//  const AboutComponent = () => {
//     // const data={
//     //     info:"HELLO  & I am",
//     //     name:"Madhulika Dubey",
//     //     image:"image",
//     //     des:"I am a freelancer and corporate trainer having 12 years of experience."

//     // }
//     const {updateAboutPage}= useGlobalContext();

//     useEffect(()=>{
//       updateAboutPage();},[]);

//   return (
//     <HomeComponent/>
//   )
// }

// export default AboutComponent;

import React, { useEffect } from "react";
import HomeComponent from "../home/HomeComponent";
import { useGlobalContext } from "../context";
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import styled from "styled-components";


const AboutComponent = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

 

  return (
    <Wrapper>
      <div className="container">
      <HomeComponent />
       <div  className="about">
    <div className="about-social">
          
          <div className="about-social-icons">

          <div>
              <a href="https://www.linkedin.com/in/madhulika-dubey3" target="_blank"> <FaLinkedin className="icons"/></a></div>
            <div><a href="https://www.instagram.com/refreshcoding/" target="_blank"><FaInstagram className="icons"/></a></div>
            <div><a href="https://www.facebook.com/RefreshCodingM/" target="_blank"><FaFacebook className="icons"/></a></div>
            <div><a href="https://www.github.com/madhulika3016" target="_blank"><FaGithub className="icons"/></a></div>
          
            
          </div>
        </div>
        

    </div>
      
      </div>
      
    
    
    
    </Wrapper>
    
    
  );
};

const Wrapper=styled.section`

.active{
  display:none;
}
.container{
  max-width:auto;
  height:auto;
}




  
  


  .about-social{
    
    display:flex;
   height:auto;
   width:auto;
    justify-content:center;
    align-items:center;
    background:linear-gradient(45deg, #0ef,black);
    border-radius:20px 0px 30px 0px;
  }
  .about-social-icons{
    display:flex;
    gap:2rem;
    flex-direction:row;
    justify-content:space-between;
    padding:1rem;
    
    
  
    div{
      padding:1rem;
      border-radius:50%;
      border:2px solid black;
      
  
      .icons{
        
       
        
        color:black;
        // color;black;
        font-size:2.5rem;
        position:relative;
        cursor:pointer;

      }
   
      .icons:hover{
        color:${({theme })=> theme.colors.btn};
        transform:rotateY(360deg);

      }
      
      
    }
  }

`;

export default AboutComponent;