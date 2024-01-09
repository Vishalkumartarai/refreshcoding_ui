import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { Button } from "../../styles/Button";
import Java from "../../images/dealing/java.png";

import j2 from "../../images/blogs/java3.png";
import j3 from "../../images/blogs/java4.png";
import j4 from "../../images/blogs/10.png";

import j6 from "../../images/blogs/java7.png";
import j7 from "../../images/blogs/java8.png";
import j8 from "../../images/blogs/web.png";

import c1 from "../../images/blogs/2.png";
import c2 from "../../images/blogs/3.png";
import c3 from "../../images/blogs/4.png";
import c4 from "../../images/blogs/5.png";
import c5 from "../../images/blogs/6.png";
import c6 from "../../images/blogs/7.png";
import c7 from "../../images/blogs/8.png";
import c8 from "../../images/blogs/9.png";
import c9 from "../../images/blogs/1.png";

import { baseUrl, GET_BLOGS } from "../../constant/Apiurl";
const BlogComponent = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const image = [
    Java,
    j2,
    j3,
    j4,
    c5,
    j6,
    j7,
    j8,
    c9,
    c1,
    c2,
    c3,
    c4,
    c6,
    c7,
    c8,
  ];

  const goToChild = (state) => {
    // Pass state to the child route
    navigate("/blogsdetails", { state: state });
  };

  const API2 = baseUrl + GET_BLOGS;
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(API2, { method: "get" });
      const data = await res.json();
      setIsLoading(false);
      setBlogs(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // to call the api
  useEffect(() => {
    getBlogs();
    console.log("I am v");
  }, []);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">BLOGS</h2>
      {!isLoading ? (
        <div className="container grid grid-three-column">
          {blogs?.map((curElm) => {
            const { id, title } = curElm;
            return (
              <div key={id} className="card">
                <div className="card-data">
                  <img
                    className="bimg"
                    src={image[Math.floor(Math.random() * image?.length)]}
                  />
                  <h3 className="btitle">{title}</h3>

                  <Button className="btn" onClick={() => goToChild(curElm)}>
                    LEARN MORE
                  </Button>
                </div>
              </div>
            );
          })}
          {/* <Routes>
        <Route path="blogsdetails" element={<BlogDetails />} />
      </Routes> */}
        </div>
      ) : (
        <CircularProgress />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
padding:9rem 0;
background-color:white;

.container grid grid-three-column{
  background-color:#fff;
  opacity:1;
}
.bimg{
  width:10vw;
  height:10vw;
}
h3{
  
}



.container{
  max-width:auto;
  height:auto;
}
.card{
  border: 1px solid black;
  width: auto;
  height:auto;
  background:linear-gradient(45deg,${({ theme }) => theme.colors.btn},#fff);
  box-shadow: 0 3px 12px 1px rgba(0, 0, 0, .15);
    display:flex;
    justify-content:center;
   
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    flex-wrap:wrap;
   
    // margin: 0px  10px;
    transition: 0.2s ease;
    position: relative;
}

  .card-data{
    padding;0 2rem;
    // border: 2px dashed black;
    width:90%;
  height:auto;
  box-shadow: 0 8px 16px 3px rgba(0, 0, 0, .20);
  
    background-color: #fff;
   
    padding: 10px 12px;
    border: 2px solid  ;
    // border-color: red green blue yellow;
    border-radius: 25px;
    cursor: pointer;
    display:flex;
    flex-direction:column;
   text-align:center;
   justify-content:center;
   align-items:center;
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
    flex-wrap:wrap;

  }
  

  h3 ,p{
    margin:2rem 0;
    font-weight:300;
    font-size:1.5 rem;
    text-align:center;

  }
  .btn{
    margin:1rem auto;
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
  // .bimg{
  //   max-width:auto;
  //   margin-top:1.5 rem;
  //   height:8vh;
  //   transition:all 0.2s linear;
  // }
}
// @media(max-width:${({ theme }) => theme.media.tab}){
//   grid-three-column{
//     grid-template-columns:1fr 1fr 1fr;

//   }
//   .card{
//     width:auto;
//     height:auto;
//   }
//   .bimg{
//     width:auto;
//     height:auto;
//   }
//   .card-data{
//     width:90%;
//     height:auto;
//   }
//   .btn{
//     height:auto;
//     width:auto;}


// }
// @media(max-width:${({ theme }) => theme.media.mobile}){
//   .grid{
//       gap:3rem;

//   }
//   .card{
//     width:auto;
//     height:auto;
//   }
//   .bimg{
//     width:90%;
//     height:auto;
//   }
//   .card-data{
//     width:auto;
//     height:auto;
//   }
//   .grid-one-column{
//       grid-template-columns:1fr ;
//   }
//   .btn{
//     height:auto;
//     width:auto;}

// }
`;

export default BlogComponent;
