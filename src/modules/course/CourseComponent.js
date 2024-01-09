import React ,{ useEffect,useState } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
// import Button from "../styles/Button";
import { useGlobalContext } from '../context';
import { Button } from '../../styles/Button';
import Java from '../../images/dealing/java.png';
import Aws from '../../images/dealing/aws.png';
import Atom from '../../images/dealing/atom.png';
import Devops from '../../images/dealing/devops.png';
import Micro from '../../images/dealing/microservice.png';
import Cloud from '../../images/dealing/cloud-server.png';
import { GET_COURSES, baseUrl } from '../../constant/Apiurl';

export const CourseComponent = () => {

  // const API = "http://localhost:5000/courses";

  // const [state, dispatch] = useReducer(reducer, intialState);

  

  // const {courses}=useGlobalContext();
  // console.log(courses);

  const courseImages={
    java:Java,
    aws:Aws,
    react:Atom,
    devops:Devops,
    microservices:Micro,
    cloud:Cloud

  }
  
    const API = baseUrl+GET_COURSES;
    
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
      try {
        const res = await fetch(API, { method: "GET" });
        const data = await res.json();
        setCourses(data); // Set fetched courses to state
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getCourses();
    }, []);
  


  


  
  
  return (
    <Wrapper className="section"> 
      <h2 className='common-heading'>COURSES</h2>
      <div className='container grid grid-three-column'>
        {
          courses.map((curElm)=>{
            const{id,title,desc,link}=curElm;
            return(
            <div key={id} className='card'>
              <figure>
                <img className='cimg' src={courseImages[title.toLowerCase()]} alt={title}/>
              </figure>
              <div className="card-data">
                <h3 className='ctag'>{title.toUpperCase()}</h3>
                <p className='cdes'>{desc}</p>
                <NavLink to={link} target="_blank">
                <Button className='btn'>LEARN THIS</Button>
                </NavLink>
                
                
              </div>
            </div>
              
            );

          })
        }

      </div>
    
   

    </Wrapper>
  )
};
const Wrapper=styled.section`
padding:9rem 0;


.ctag{
  color:blue;
  font-size:auto;
  font-weight:bold;
  
}
.cdes{
  
}



.section{
  background-color:#fff;
}

.container{
  max-width:auto;
}
.container grid grid-three-column .common-heading{
  background-color:#fff;
}
.card{
  display:flex;
  flex-wrap:wrap;
  border: 1px solid black;
  background:linear-gradient(45deg, #fff,${({theme })=> theme.colors.btn});
  // background-color:#96b6c5;
  width: auto;
  height:auto;
    min-width: 25px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px 25px 25px 60px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0,0,0,0.02);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
    flex-direction:column;
}

  .card-data{
    display:flex;
  flex-wrap:wrap;
  flex-direction:column;
    width:auto;
    height:auto;
    padding;0 4rem;
    
    border-radius:2px 60px 2px 60px;
    
  }

  h3 ,p{
    margin:1rem 0;
    font-weight:300;
    font-size:2.4 rem;
    text-align:center;

  }
  .btn{
    margin:2rem auto;
    background-color:rgb(0 0 0 /0%);
    border:0.1rem solid rgb(98 84 243);
    display:flex;
    justify-content:center;
    align-itmes:center;
    border-radius:20px;
    font-size:1.4rem;

    &:hover{
      background-color:rgb(98 84 243);
      color:#fff;
  
    }


  }
  
  

}
figure{
  width:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  transition:all 0.5s linear;
  &::after{
    
    content:"";
    position:absolute;
    top:0;
    left:0px;
    
    width:0%;
    height:50rem;
    background-color:rgba(0,0,0,0.5);
    transition:all 0.2s linear;
    cursor:pointer;

  }
  &:hover::after{
    width:100%;
  }
  &:hover img{
    transform:scale(1.2);

  }
  img{
   height:10vw;
   width:10vw;
   margin-top:2rem;
    transition:all 0.2s linear;
  }
}

`;

export default CourseComponent