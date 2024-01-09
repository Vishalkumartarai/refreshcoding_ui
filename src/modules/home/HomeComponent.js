import React from "react";

import styled from "styled-components";

import { useGlobalContext } from "../context";

export const HomeComponent = () => {
  const { info, name, image, des } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-twos-column">
        <div className="section-home-data">
          <h2 className="home-info">{info}</h2>
          <h1 className="home-heading">
            <span className="heading-animation">{name}</span>
          </h1>
          <h3 className="home-des">{des}</h3>
        </div>
        <div className="section-home-image">
          <img src={image} alt="home image" className="home-img " />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Animation for home-info */
  .home-info {
    animation: fadeInUp 1s ease forwards;
  }

  /* Animation for home-heading */
  .home-heading {
    animation: slideInLeft 1s ease forwards;
  }

  /* Animation for home-des */
  .home-des {
    animation: rotateIn 1s ease forwards;
  }

  /* Keyframes for fadeInUp */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      transition: 0.5s ease;
    }
  }

  /* Keyframes for slideInLeft */
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      transition: 0.5s ease;
    }
  }

  /* Keyframes for rotateIn */
  // @keyframes rotateIn {
  //   0% {
  //     opacity: 0;
  //     transform: rotate(90deg);
  //   }
  //   100% {
  //     opacity: 1;
  //     transform: rotate(0);
  //   }
  // }

  padding: 9rem 0;

  span {
    color: ${({ theme }) => theme.colors.btn};
  }
  .common-heading {
    text-align: center;
    margin: 50px;
  }

  .section-home-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
    margin: 4rem;
  }

  .home-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .home-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
    position: relative;
  }
  .home-info {
    text-align: start;
  }
  .home-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-home-image {
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: end;
    animation: floatImage 4s ease-in-out infinite;
    box-shadow: 0 25px 50px ${({ theme }) => theme.colors.btn};
    background-color: ${({ theme }) => theme.colors.btn};
    border: 2px solid ${({ theme }) => theme.colors.btn};
    border-radius: 18px 95px 22px 50px !important;
    width: auto;
    height: 25vh;

    .active {
      display: none;
    }
  }
  @keyframes floatImage {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2.8rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  picture {
    text-align: center;
  }
  .home-img {
    max-width: 45vw;
    height: 45vh;
    padding: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .home-img {
      max-width: 26vw;
      height: auto;
    }
    .section-home-image {
      margin-top: 10rem;

      width: 40vw;
      height: 10vh;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .home-img {
      max-width: 26vw;
      height: auto;
    }
    .section-home-image {
      margin-top: 10rem;

      width: 40vw;
      height: 10vh;
    }
    .grid {
      gap: 4.8rem;
    }
    .t1 {
      height: auto;
    }
    .r1 {
      height: auto;
    }
    .c1 {
      height: auto;
      .c-box {
        height: 100px;
        width: auto;
      }
    }
  }
`;

export default HomeComponent;
