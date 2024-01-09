
import React from 'react';
import{ useEffect } from 'react';
import { useGlobalContext } from '../context'
import HomeComponent from '../home/HomeComponent' 
import BlogComponent from '../blog/BlogComponent';
import AboutComponent from '../about/AboutComponent';
import ContactComponent from '../contact/ContactComponent';
import Home2 from './Home2';
// import Header from '../modules/header/Header';
// import Footer from '../modules/footer/Footer';
// import GotoTop from '../modules/GotoTop';


 export const Home = () => {

    const {updateHomePage}= useGlobalContext();

    useEffect(()=>{updateHomePage();},[]);

  return (
    <>
    {/* <Header/> */}
    <HomeComponent/>
    <Home2/>
    {/* <GotoTop/>
    <Footer/> */}
    
    
    </>
    
  )
}

export default Home