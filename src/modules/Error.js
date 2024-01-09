import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import {NavLink} from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
        <img src="image"/>
        <NavLink to="/">
        <Button>Go Back</Button>

        </NavLink>
       

    </Wrapper>
  

  );
    
}
const Wrapper=styled.section`
padding:9rem;
display:flex;
justify-content:center;
align-items:column;
flex-direction:column;

.btn{
    font-size:1.8rem;
    margin-top:3rem
}`;

export default Error