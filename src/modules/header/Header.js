import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import styled from 'styled-components';
import {FaUser} from "react-icons/fa";



export const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
             <img src="./images/home.jpg" alt="logo" className='logo' />
             
        </NavLink>
        <NavLink to="/admin/login"><div><a target="_blank"><FaUser className="icons"/></a></div></NavLink>
        <Navbar/>

    </MainHeader>
  )
}
const MainHeader=styled.header`
padding :0 4.8rem;
height: 10rem;
background-color:${({theme})=> theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;

.logo{
    height:4
    rem;
    max-width:30%;

}
.icons{
  width:25px;
  height:25px;
}

`;

export default Header