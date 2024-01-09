import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Slider = ({ reviewData }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const nextSlide = () => {
    if (slideIndex < reviewData.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <Wrapper>
      <div className="r1">
        <div className="common-heading2">
          They Believed <span> We Worked Hard</span>
        </div>
        <div className="container grid grid-ones-column slider">
          <div
            className="slider-container"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {reviewData.map((review, index) => (
              <div key={index} className="r-box">
                <div className="r-sub">
                  <img className="simg" src={review.image} alt={review.name} />
                  <h1 className="names">{review.name}</h1>
                </div>
                <h2>{review.heading}</h2>
                <p className="rpar">{review.para}</p>
                <a
                  href={review.redLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
            ))}
          </div>
          <button className="prev-btn" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .common-heading {
    text-align: center;
    margin: 50px;
  }
  .simg {
    width: 7vw;
    height: 7vw;
    // border-radius:50%;
    // position: relative;
    // top: -4vw;
  }
  .icons {
    width: 2vw;
    height: 2vw;
    color: blue;
  }
  .r1 {
    margin-top: 15px;
    padding-top: 5px;
    height: auto;
    align-items: center;

    .r-box {
      grid-column-gap: 2vw;
      background-color: #fff;
      height: auto;
      border-radius: 10px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 5px;
      padding: 20px;
      font-family: Lato, sans-serif;
      display: flex;
      box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.15);
    }
  }
`;

export default Slider;
