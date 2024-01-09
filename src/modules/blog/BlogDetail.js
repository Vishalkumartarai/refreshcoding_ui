import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Button } from "../../styles/Button";
import parse from "html-react-parser";

const BlogDetails = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const blogData = location.state;

  console.log(location);
  // important
  // use effect array and if-else condition to check whethe the state is undefined if undefined then navigate to blogcomponent
  useEffect(() => {
    if (!blogData) {
      navigate("/blogs");
    }
  }, [blogData]);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">BLOGS</h2>
      <div className="container grid grid-one-column">
        <div key={blogData?.id} className="card">
          <div className="card-data">
            <h2 className="btitle">{blogData?.title.toUpperCase()}</h2>

            <div className="bdesc">{parse(blogData?.desc)}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`padding:9rem 0;
background-color:${({ theme }) => theme.colors.white};

.container grid grid-three-column{
  background-color:white;
}
.bimg{
  width:10vw;
  height:10vw;
}
.bdes{
  height:auto;
  width:auto;
  font-size:auto;
  font-width:auto;
}



.container{
  max-width:auto;
  height:auto;
}



  .card-data{
    padding;0 2rem;
    border: 1px solid black;
  width: auto;
  height:auto;
  box-shadow: 0 8px 16px 3px rgba(0, 0, 0, .80);
    
   
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
   text-align:center;
   justify-content:center;
   align-items:center;
   
    transition: 0.2s ease;
    position: relative;

  }

  

  h2{
    margin:2rem 0;
    font-weight:600;
    
    text-align:center;
    color:${({ theme }) => theme.colors.btn};

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
    left:0;
    width:0%;
    height:100%;
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
    wwidth:10vw;
    height:10vh;
    margin-top:1.5 rem;
    height:20rem;
    transition:all 0.2s linear;
  }
  
}
// @media(max-width:${({ theme }) => theme.media.tab}){
//   grid-three-column{
//     grid-template-columns:1fr 1fr 1fr;

//   }
//   .card{
//     width:auto;
//     height:auto;
//   }


// }
@media(max-width:${({ theme }) => theme.media.mobile}){
  .grid{
      gap:1rem;

  }
  .bdes{
    height:90vh;
    width:90vw;
    font-size:1rem;
    
  }
  .card{
    width:auto;
    height:auto;
  }
  .card-data{
    width:auto;
    height:auto;
  }
  .grid-one-column{
      grid-template-columns:1fr ;
  }

}`;

export default BlogDetails;
