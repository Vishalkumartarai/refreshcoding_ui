import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/Button'
import {NavLink} from "react-router-dom";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

export const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div >
          <h3>Ready to Learn</h3>
          <h3>Talk to Us</h3>
            
          </div>
          <div className="contact-short-btn">
          <NavLink to="/contact">
              <Button >Get Started</Button>
            </NavLink>
          
           
          </div>
          
        </div>
      </section>

      <footer>
      <div className="container grid grid-fourt-column">
        <div className="footer-about">
          <h3>REFRESH CODING</h3>
          <p>lorem dipsum lorem dipsum lorem dippsum</p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe Us</h3>
          <form action="https://www.youtube.com/@refreshcoding/subscribe">
            <input type="email" required autoComplete="off" placeholder="Email"/>
            <input type="submit"  value="Subscribe"/>
          </form>
          
        </div>


        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">

            <div>
              <a href="https://www.linkedin.com/in/madhulika-dubey3" target="_blank"> <FaLinkedin className="icons"/></a></div>
            <div><a href="https://www.instagram.com/refreshcoding/" target="_blank"><FaInstagram className="icons"/></a></div>
            <div><a href="https://www.facebook.com/RefreshCodingM/" target="_blank"><FaFacebook className="icons"/></a></div>
            <div><a href="https://www.youtube.com/@refreshcoding" target="_blank"><FaYoutube className="icons"/></a></div>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Call Us</h3>
          <h3>+91 7978831248</h3>

        </div>

       


      </div>
      <div className="footer-bottom-section">
          <hr/>
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} REFRESHCODING .All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>
                TERMS & CONDITIONS
              </p>
            </div>

          </div>

        </div>
      </footer>



    </Wrapper>
  )
}
const Wrapper=styled.section`
input{
  width:30vw;
}
.contact-short{
  max-width:60vw;
  margin:auto;
  padding:3.3rem 8rem;
  background:linear-gradient(45deg,${({theme })=> theme.colors.btn},#fff);
  border-radius:1rem;
  box-shadow:${({theme })=> theme.colors.shadowSupport};
  transform:translateY(50%);

  
  


}
.contact-short-btn{
  justify-self:end;
  align-self:end;
}
footer{
  padding:8rem 0 3rem 0;
  background-color:${({theme })=> theme.colors.footer_bg};


  h3{
    color:${({theme })=> theme.colors.hr};
    margin-bottom:2.4rem;

  }
  p{
    color:${({theme })=> theme.colors.white};
  }
  .footer-social-icons{
    display:flex;
    gap:2rem;

    div{
      padding:1rem;
      border-radius:50%;
      border:2px solid #0ef;

      .icons{
        color:#0ef;
        font-size:2.4rem;
        position:relative;
        cursor:pointer;


      }
    }
  }
  .footer-bottom-section{
    padding-top:9rem;
    

  }
  hr{
    margin-bottom:2rem;
    color:${({theme })=> theme.colors.hr};
    height:0.1px;

  }
}
@media(max-width:${({theme})=> theme.media.mobile}){
  .contact-short{
    max-width:80vw;
    padding:1rem 0rem;
    display:flex;
    justify-content:center;
    align-items:center;

    .contact-short-btn{
      text-align:center;
      justify-self:flex-start;
      

    }




  }
  .footer{
    display:flex;
    flex-items:column;
  }
 
  footer .footer-bottom-section{
    padding-top:3.4rem;
  }

}


`;

export default Footer