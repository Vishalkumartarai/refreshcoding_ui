import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import atom from "../../images/dealing/atom.png";
import cloud from "../../images/dealing/cloud-server.png";
import devops from "../../images/dealing/devops.png";
import java from "../../images/dealing/java.png";
import micro from "../../images/dealing/microservice.png";
import infof from "../../images/collab/infof.png";
import Gl from "../../images/collab/Gl.png";

import info from "../../images/collab/Infosys.png";
import itc from "../../images/collab/itc.png";
import lti from "../../images/collab/lti.png";
import cprime from "../../images/collab/cprime.png";
import syn from "../../images/collab/syn.png";
import capg from "../../images/collab/capg.png";
import creative from "../../images/achv/creative.png";
import depth from "../../images/achv/depth-perception.png";
import evaluation from "../../images/achv/evaluation.png";
import prac from "../../images/achv/practice.png";
import team from "../../images/achv/teamwork.png";
import training from "../../images/achv/training.png";
import mrinal from "../../images/review/mrinal.jpeg";
import prashant from "../../images/review/prashant (1).jpeg";
import sudhir from "../../images/review/sudhir.jpeg";
import shivam from "../../images/review/shivam.jpeg";
import vishal from "../../images/review/vishal.jpeg";
import cycle from "../../images/collab/cycle.png";

const Home2 = () => {
  const footPrint = [
    {
      count: "10,000+",
      des: "Students who got trained",
    },
    {
      count: "20+",
      des: "Corporate institutions",
    },
    {
      count: "15+",
      des: "Technologies",
    },
  ];

  const review = [
    {
      image: sudhir,
      name: "AMIT KUMAR SHAW",
      redLink: "https://www.linkedin.com/in/amit-kumar-shaw-48376b147/",
      heading: "My Goals achieved ",
      para: "Refresh Coding is a beacon for Java full stack enthusiasts. The platform's expertly curated courses offer a comprehensive journey through Java's intricacies, covering everything from foundational concepts to advanced techniques.",
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
      para: "Exploring Java full stack with Angular on Refresh Coding has been a revelation. The platform's courses navigate through Java's core while seamlessly integrating Angular, providing a holistic understanding of this tech fusion. With an instructor boasting 12 years of experience, the guidance offered is unparalleled. ",
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
      para: "Venturing into DevOps on Refresh Coding has been an empowering journey. The courses seamlessly blend theory with practical implementation, offering a comprehensive understanding of DevOps principles and tools. ",
    },
  ];
  const dealing = [
    {
      logod: java,
      des: "JAVA",
    },
    {
      logod: atom,
      des: "REACT",
    },
    {
      logod: cloud,
      des: "AWS",
    },
    {
      logod: devops,
      des: "DEVopS",
    },
    {
      logod: micro,
      des: "MICROSERVICES",
    },
    {
      logod: cloud,
      des: "ANGULAR",
    },
  ];
  const learn = [
    {
      logol: cycle,
    },
  ];

  const collab = [
    {
      logoc: capg,
    },
    {
      logoc: cprime,
    },
    {
      logoc: Gl,
    },
    {
      logoc: infof,
    },
    {
      logoc: itc,
    },
    {
      logoc: lti,
    },
    {
      logoc: syn,
    },
    {
      logoc: info,
    },
  ];

  const achv = [
    {
      logoa: creative,
      content: "Creativity sparks innovation",
    },
    {
      logoa: depth,
      content: "Depth enriches understanding",
    },
    {
      logoa: evaluation,
      content: "Evaluation guides progress",
    },
    {
      logoa: prac,
      content: "Practice hones skills",
    },
    {
      logoa: team,
      content: "Teamwork fosters collaboration",
    },
    {
      logoa: training,
      content: "Training provides structured learning",
    },
  ];
  const inta = [
    {
      ques: "How I can become a good coder",
      ans: "Learn and Learn better, dive into deeper concepts and Practice ,",
    },
    {
      ques: "What are the essential skills needed to start learning programming languages",
      ans: "The essential skills needed to start learning programming languages include logical thinking, problem-solving abilities, attention to detail, and a willingness to learn and experiment.",
    },
    {
      ques: "How should I approach learning multiple languages simultaneously",
      ans: "When learning multiple programming languages simultaneously, focus on understanding the core concepts shared across languages, tackle one language at a time for mastery, and aim to build projects that apply the concepts learned in each language.",
    },
    {
      ques: "What is the importance of algorithms in programming",
      ans: "Algorithms provide systematic approaches to problem-solving, enabling efficient solutions in programming.",
    },
    {
      ques: "How does one determine which programming language to learn first",
      ans: "Consider factors like your goals (web dev, data analysis), community support, simplicity (Python, JavaScript), or demand (Java, C++).",
    },
    {
      ques: "How can I improve my problem-solving abilities in programming",
      ans: "Understand the problem thoroughly, break it into smaller steps, try different solutions, and seek help from resources or peers.",
    },
    {
      ques: "What types of jobs or industries commonly require programming skills",
      ans: "Industries like software development, IT, finance, healthcare often require programming skills.",
    },
    {
      ques: "How do I handle errors or bugs in my code effectively",
      ans: "Use debugging tools, analyze error messages, break down the code to find issues, and search online resources or forums for solutions.",
    },
  ];
  return (
    <Wrapper>
      <div className="t1">
        <div className="common-heading">
          Service <span> History</span>
        </div>
        <div className="container grid grid-three-column">
          {footPrint.map((fp) => {
            return (
              <div className="t-box">
                <h1>{fp.count}</h1>
                <p>{fp.des}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div class="d1">
        <NavLink to="/courses">
          <div class="common-heading">
            the COURSES we <span> Deal With</span>
          </div>
        </NavLink>
        <div class="container grid grid-three-column">
          {dealing.map(({ logod, des }) => {
            return (
              <div class="d-box">
                <img src={logod} className="dimg"></img>
                <div class="overlay"></div>
                <p className="ddes">{des}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="r1">
        <div className="common-heading2">
          They Believed <span2>We Worked Hard</span2>
        </div>
        <div className="container grid grid-two-column">
          {review.map(({ image, name, redLink, heading, para }) => {
            return (
              <div className="r-box">
                <div className="r-sub">
                  <img className="simg" src={image}></img>
                  <h1 className="names">{name}</h1>
                </div>
                <h2>{heading}</h2>
                <NavLink to={redLink} target="_blank">
                  <FaLinkedin className="icons" />
                </NavLink>

                <p className="rpar">{para}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="common-heading">
          <NavLink to="/review">
            <span>See All+</span>
          </NavLink>
        </div> */}
      </div>

      <div className="c1">
        <div className="common-heading">
          Top MncS I <span> Collaborated With</span>
        </div>
        <div className="container grid grid-fours-column">
          {collab.map(({ logoc }) => {
            console.log(logoc);
            return (
              <div className="c-box">
                <img src={logoc} alt="" className="cimg"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="learn">
        <div className="common-heading">
          Best Way to <span2>Learn Coding</span2>
        </div>
        <div className="container grid grid-one-column">
          {learn?.map(({ logol }) => {
            return (
              <div className="l-box">
                <img src={logol} alt="" className="limg"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="a1">
        <div className="common-heading">
          Refresh Your <span> Knowledge</span>
        </div>
        <div className="container grid grid-three-column">
          {achv.map(({ logoa, content }) => {
            return (
              <div className="a-box">
                <img src={logoa} className="aimg"></img>

                <p>{content.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="i1">
        <div className="common-heading3">
          Most Asked<span2> Questions</span2>
        </div>
        <div className="container grid grid-one-column">
          {inta.map(({ ques, ans }) => {
            return (
              <div className="i-box">
                <h2 className="ab">
                  {ques}
                  <span>?</span>
                </h2>
                <h2 className="abans">{ans}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  span {
    color: ${({ theme }) => theme.colors.btn};
  }
  span2 {
    color: #fff;
  }
  .common-heading {
    height: auto;
    text-align: center;
    padding: auto;
    margin: 20px;
  }
  .common-heading2 {
    text-align: center;
    padding: auto;
    margin: 50px;
    font-size: 3.8rem;
    font-weight: 600;
  }
  .common-heading3 {
    text-align: center;
    padding: auto;
    margin-top: 120px;
    font-size: 3.8rem;
    font-weight: 600;
  }
  .learn {
    height: auto;
    width: auto;
    background: linear-gradient(${({ theme }) => theme.colors.btn}, pink);
  }
  .l-box {
  }
  .limg {
    width: 70vw;
  }

  .aimg {
    width: 8vw;
    height: 12vh;
  }
  .cimg {
    width: 14vw;
    height: 10vh;
    padding: 5px;
  }
  .ab {
    font-size: 2rem;
    padding: 5px 2px;
  }
  .t1 {
    margin-top: 50px;
    padding-top: 0px;
    height: auto;

    align-items: center;

    .t-box {
      grid-column-gap: 2vw;

      border-radius: 5px 40px 5px 40px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 1vw;

      font-family: Lato, sans-serif;
      display: flex;
      box-shadow: 0 3px 12px 4px ${({ theme }) => theme.colors.btn};
      // background-color:#265073 ;
    }
  }
  // .r1 {
  // margin-top: 15px;
  // padding-top: 5px;
  // height: auto;
  // align-items: center;

  //   .r-box {
  //     grid-column-gap: 2vw;
  //     background-color: #fff;
  //     height: auto;
  //     border-radius: 20px;
  //     flex-direction: column;
  //     justify-content: flex-start;
  //     align-items: center;
  //     margin: 5px;
  //     padding: 20px;
  //     font-family: Lato, sans-serif;
  //     display: flex;
  //     box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.75);
  //   }
  //   .rsub {
  //     display: flex;
  //     flex-direction: row;
  //     text-align: start;
  //     align-items: center;
  //     justify-content: center;
  //   }
  // }
  .r1 {
    /* Your existing styles */
    margin-top: 65px;

    height: auto;
    align-items: center;
    background: linear-gradient(${({ theme }) => theme.colors.btn}, pink);
  }

  .r-box {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.75);
    margin: 5px;
    padding: 20px;
    font-family: Lato, sans-serif;
  }

  .r-sub {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5px; /* Space between image and text */
  }

  .simg {
    width: 100px; /* Adjust image size as needed */
    height: 100px;
    border-radius: 12%;
    margin-right: 20px; /* Space between image and text */
    top: -4vw;
    position: relative;
  }

  .names {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 1rem;
    // font-weight: bold;

    margin-bottom: 5px;
  }

  .rpar {
    font-size: 1, 4rem;
    line-height: 1.2;
  }

  .d1 {
    margin-top: 20px;
    padding-top: 0px;
    height: auto;
    align-items: center;

    .d-box {
      transform: translateY(50%);
      transition: 0.5s ease;

      grid-column-gap: 2vw;
      background-color: beige;
      height: auto;
      border-radius: -20px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      font-family: Lato, sans-serif;
      display: flex;
      box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.75);
      border-radius: 2px 80px 2px 80px;
      overflow: hidden;
    }
  }
  .d-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  /* Text to appear on hover */
  .d-box .ddes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  /* Overlay for background image */
  .d-box .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }

  /* Hover effect */
  .d-box:hover::before {
    opacity: 1;
  }

  .d-box:hover .ddes {
    opacity: 1;
  }

  .d-box:hover .overlay {
    opacity: 1;
  }

  /* Styles for the parent element */
  .a1 {
    margin-top: 30px;
    padding-top: 0px;
    height: auto;
    align-items: center;
  }

  /* Styles for the child element */
  .a-box {
    position: relative;
    transform: translateY(50%);
    transition: 0.5s ease;
    grid-column-gap: 2vw;
    background-color: beige;
    height: auto;
    border-radius: 140px 60px 140px 60px;
    box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.75);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5px;
    padding: 20px;
    font-family: Lato, sans-serif;
    display: flex;
    overflow: hidden;
  }

  /* Pseudo-element for the hover effect */
  .a-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 140px 60px 140px 60px;
  }

  /* Text to appear on hover */
  .a-box p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease;
  }
  .a-box:hover::before {
    opacity: 1;
  }

  .a-box:hover p {
    opacity: 1;
  }

  /* Text styles */
  .a-box::before {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }

  /* Additional styles for the text */
  .a-box:hover::before {
    content: content; /* Change this to the text you want to display */
  }

  .icons {
    width: 2vw;
    height: 2vw;
    color: blue;
  }
  .dimg {
    width: 8vw;
    height: 8vw;
    padding: 5px;
  }
  .c1 {
    margin-top: 30px;
    padding-top: 50px;
    height: auto;
    width: auto;

    align-items: center;

    .c-box {
      width: auto;
      height: auto;
      grid-column-gap: 1.5vw;
      background-color: #fff;
      border-radius: 13px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 5px;
      font-family: Lato, sans-serif;
      display: flex;
      box-shadow: 0 3px 12px 4px ${({ theme }) => theme.colors.btn};
    }
  }
  .i1 {
    margin-top: 55px;
    padding-top: 0px;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(${({ theme }) => theme.colors.btn}, pink);

    .i-box {
      width: auto;
      height: 60px;
      transition: 2s ease;

      grid-column-gap: 2vw;
      background-color: #fff;
      height: auto;
      border-radius: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;
      padding: 10px;
      font-family: Lato, sans-serif;
      display: flex;
      box-shadow: 0 3px 12px 1px ${({ theme }) => theme.colors.btn};

      .abans {
        display: none;
      }
    }

    .i-box:hover {
      transition: 2s ease;
      width: 90vw;
      border-radius: 2px 80px 2px 80px;

      .ab {
        display: none;
      }

      .abans {
        display: flex;
        justify-content: center;

        align-items: center;
        text-align: center;
        font-size: 2rem;
        padding: 5px 2px;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .c-box {
      width: auto;
    }
    .cimg {
      width: 14vw;
      height: 10vh;
      padding: 5px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .simg {
      width: 7vw;
      height: 7vw;
      // border-radius:50%;
      position: relative;
      top: -4vw;
    }
    .common-heading {
      height: auto;
      text-align: center;
      padding: auto;
      margin: 15px;
    }
    .aimg {
      width: 8vw;
      height: 4vh;
    }
    .c-box {
      width: auto;
      height: 6vh !important;
    }
    p {
      width: auto;
      height: auto;
      overflow: auto;
    }
    .cimg {
      width: 14vw;
      height: 8vh;
      padding: 5px;
    }
    .limg {
      width: 70vw;
    }
  }
  /* Reset */
`;

export default Home2;
