import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import mrinal from "../../images/review/mrinal.jpeg";
import prashant from "../../images/review/prashant (1).jpeg";
import sudhir from "../../images/review/sudhir.jpeg";
import shivam from "../../images/review/shivam.jpeg";
import vishal from "../../images/review/vishal.jpeg";
import Slider from "./Slider";

const Reviews = () => {
  const review = [
    {
      image:
        "https://assets-global.website-files.com/62d6fb84ec041f09ae295df5/63c663bc3e158b48a7deddbb_devops-p-500.png",
      name: "Sir Ratan Tata",
      redLink: "",
      heading: "My Goals achieved ",
      para: "Refresh Coding is a beacon for Java full stack enthusiasts. The platform's expertly curated courses offer a comprehensive journey through Java's intricacies, covering everything from foundational concepts to advanced techniques. With an instructor boasting 12 years of invaluable experience, the site's engaging content and practical approach provide a solid foundation for mastering Java full stack development. An essential destination for those eager to excel in this dynamic field.",
    },
    {
      image:
        "https://assets-global.website-files.com/62d6fb84ec041f09ae295df5/63c663bc3e158b48a7deddbb_devops-p-500.png",
      name: "Mukesh Bhaina",
      redLink: "",
      heading: "My Goals achieved",
      para: "As a student diving into Java full stack with React, Refresh Coding exceeded my expectations. The courses are meticulously structured, offering a seamless progression from Java fundamentals to React integration. The instructor's 12 years of expertise shine through in the clear explanations and practical examples. Refresh Coding isn't just a platform; it's a guiding light for anyone aiming to conquer Java full stack development with React.",
    },
    {
      image:
        "https://assets-global.website-files.com/62d6fb84ec041f09ae295df5/63c663bc3e158b48a7deddbb_devops-p-500.png",
      name: "Elon Musk",

      redLink: "",
      heading: "My Goals achieved",
      para: "Exploring Java full stack with Angular on Refresh Coding has been a revelation. The platform's courses navigate through Java's core while seamlessly integrating Angular, providing a holistic understanding of this tech fusion. With an instructor boasting 12 years of experience, the guidance offered is unparalleled. From Angular basics to advanced Java applications, Refresh Coding is a pivotal resource for mastering Java full stack development harmonized with Angular.",
    },
    {
      image: sudhir,
      name: "AMIT KUMAR SHAW",
      redLink: "https://www.linkedin.com/in/amit-kumar-shaw-48376b147/",
      heading: "My Goals achieved ",
      para: "Refresh Coding is a beacon for Java full stack enthusiasts. The platform's expertly curated courses offer a comprehensive journey through Java's intricacies, covering everything from foundational concepts to advanced techniques. With an instructor boasting 12 years of invaluable experience, the site's engaging content and practical approach provide a solid foundation for mastering Java full stack development. An essential destination for those eager to excel in this dynamic field.",
    },
    {
      image: sudhir,
      name: "SUDHIR ZALAYA",
      redLink: "https://www.linkedin.com/in/sudhir-zalaya-379ab5211/",
      heading: "My Goals achieved",
      para: "Madhulika's training was a game-changer for my proficiency in Java full stack with React. Her expertise and meticulous approach created a solid base, enhancing my contributions to our projects. Capgemini's investment in such training is truly beneficial.",
    },
    {
      image: shivam,
      name: "SHIVAM GANJU",

      redLink: "https://www.linkedin.com/in/shivam-ganju-b0034519b/",
      heading: "My Goals achieved",
      para: "Exploring Java full stack with Angular on Refresh Coding has been a revelation. The platform's courses navigate through Java's core while seamlessly integrating Angular, providing a holistic understanding of this tech fusion. With an instructor boasting 12 years of experience, the guidance offered is unparalleled. From Angular basics to advanced Java applications, Refresh Coding is a pivotal resource for mastering Java full stack development harmonized with Angular.",
    },
    {
      image: prashant,
      name: "PRASHANT VISWAKARMA",

      redLink: "https://www.instagram.com/refreshcoding/",
      heading: "My Goals achieved",
      para: "Madhulika's training in Java full stack with React was exceptional. She delved into each topic, providing a comprehensive understanding. Her commitment to quality education reflects Capgemini's commitment to nurturing talent and excellence.",
    },
    {
      image: mrinal,
      name: "MRINAL MALHOTRA",

      redLink: "https://www.linkedin.com/in/mrinal-malhotra-130259232/",
      heading: "My Goals achieved",
      para: "Madhulika made our  React training memorable. Her detailed explanations and commitment to covering every aspect made the learning experience enjoyable. Lucky to have had her as our trainer at Capgemini!",
    },
    {
      image: vishal,
      name: "VISHAL KUMAR TARAI",

      redLink: "https://www.linkedin.com/in/vishal-kumar-tarai-318773223/",
      heading: "My Goals achieved",
      para: "Venturing into DevOps on Refresh Coding has been an empowering journey. The courses seamlessly blend theory with practical implementation, offering a comprehensive understanding of DevOps principles and tools. The instructor’s 12 years of expertise shine through in the detailed explanations and hands-on exercises. Refresh Coding stands as a cornerstone for anyone seeking to master DevOps, providing the necessary skills to streamline software development and deployment processes effectively.",
    },
  ];
  return (
    <div className="AppSlider">
      <Slider reviewData={review} />
    </div>
  );
};
{
  /*<Wrapper>
      

       <div className="r1">
        <div className="common-heading">
          They Believed <span> We Worked Hard</span>
        </div>
        <div className="container grid grid-two-column">
          {review.map(({ image, name, redLink, heading, para }) => {
            return (
              <div className="r-box">
                <img className="simg" src={image}></img>
                <h1 className="names">{name}</h1>

                <NavLink to={redLink}>
                  <FaLinkedin className="icons" />
                </NavLink>
                <h2>{heading}</h2>
                <p>{para}</p>
              </div>
            );
          })}
        </div>
      </div> 
    </Wrapper>*/
}

// const Wrapper = styled.section`
//   .common-heading {
//     text-align: center;
//     margin: 50px;
//   }
//   .simg {
//     width: 7vw;
//     height: 7vw;
//     // border-radius:50%;
//     position: relative;
//     top: -4vw;
//   }
//   .icons {
//     width: 2vw;
//     height: 2vw;
//     color: blue;
//   }
//   .r1 {
//     margin-top: 15px;
//     padding-top: 5px;
//     height: auto;
//     align-items: center;

//     .r-box {
//       grid-column-gap: 2vw;
//       background-color: #fff;
//       height: auto;
//       border-radius: 10px;
//       flex-direction: column;
//       justify-content: flex-start;
//       align-items: center;
//       margin: 5px;
//       padding: 20px;
//       font-family: Lato, sans-serif;
//       display: flex;
//       box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.15);
//     }
//   }
// `;

export default Reviews;
