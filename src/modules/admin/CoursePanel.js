import styled from "styled-components";
import { ADD_COURSES, baseUrl } from "../../constant/Apiurl";
import React, { useState } from "react";
import axios from "axios"; // Import axios if not already done

const CoursePanel = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    heading: "",
    link: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
    // Clear the error message if input is provided after an error was shown
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check for empty fields and set error messages
    if (!courseData.title.trim()) {
      newErrors.title = "Title cannot be empty";
    }
    if (!courseData.heading.trim()) {
      newErrors.heading = "Heading cannot be empty";
    }
    if (!courseData.link.trim()) {
      newErrors.link = "URL cannot be empty";
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission, e.g., send data to backend or perform necessary actions
      console.log("Course Data:", courseData);
      // Reset form after submission
      setCourseData({ title: "", heading: "", link: "" });
      addCourses(courseData);
    }
  };

  const addCourses = (payload) => {
    // Assuming axios and the API URL are correctly set up
    axios
      .post(baseUrl + ADD_COURSES, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <div className="container">
        <h1>Add New Course</h1>
        <form onSubmit={handleSubmit} className="course-form">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
              placeholder="Enter Your Title Here"
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="heading"
              name="heading"
              value={courseData.heading}
              onChange={handleInputChange}
              placeholder="Enter Your Heading Here"
            />
            {errors.heading && <p className="error">{errors.heading}</p>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="youtube"
              name="link"
              value={courseData.link}
              onChange={handleInputChange}
              placeholder="Paste Your YouTube URL Here"
            />
            {errors.link && <p className="error">{errors.link}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Add Course
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    width: 60vw;
    height: 80vh;

    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .course-form {
    align-items: center;
    text-align: center;
  }
  .mb-3 {
    margin: 4rem;
  }
  .form-label {
    font-size: 2rem;
    font-weight: 488;
  }
  .form-control {
    border: 2px solid #007bff;
  }

  .btn {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #0056b3;
  }
`;

export default CoursePanel;
