import React, { useState } from "react";
import axios from "axios"; // Import axios if not already done
import { ADD_BLOGS, baseUrl } from "../../constant/Apiurl";
import "./blog.css";

export const BlogPanel = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    heading: "",
    desc: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
    // Clear the error message if input is provided after an error was shown
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check for empty fields and set error messages
    if (!blogData.title.trim()) {
      newErrors.title = "Title cannot be empty";
    }
    if (!blogData.desc.trim()) {
      newErrors.desc = "Description cannot be empty";
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission, e.g., send data to backend or perform necessary actions
      console.log("Blog Data:", blogData);
      // Reset form after submission
      setBlogData({ title: "", heading: "", desc: "" });
      addBlogs(blogData);
    }
  };

  const addBlogs = (payload) => {
    // Assuming axios and the API URL are correctly set up
    axios
      .post(baseUrl + ADD_BLOGS, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="acontainer">
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
            placeholder="Enter Your Title here"
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="description"
            cols="50"
            rows="10"
            name="desc"
            value={blogData.desc}
            onChange={handleInputChange}
            placeholder="Enter Your Description here"
          ></textarea>
          {errors.desc && <p className="error">{errors.desc}</p>}
        </div>
        <button type="submit" className="abtn">
          Add Blog
        </button>
      </form>
    </div>
  );
};
