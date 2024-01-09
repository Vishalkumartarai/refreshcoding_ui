import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { BlogPanel } from "./BlogPanel";
import CoursePanel from "./CoursePanel";
import styled from "styled-components";
import { Button } from "../../styles/Button";

const AdminComponent = () => {
  const [view, setView] = useState("blog");
  const [adminDetails, setAdminDetails] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  let navigate = useNavigate();
  useEffect(() => {
    console.log(adminDetails);
    if (!adminDetails.hasOwnProperty("email")) {
      navigate("/admin/login");
    }
  }, [adminDetails]);

  return (
    <Wrapper>
      <div className="cont">
        <button
          className="btn"
          onClick={() => {
            setView("blog");
          }}
        >
          Add Blog
        </button>
        <NavLink to="/admin/login">
          <Button className="btn">LOGOUT</Button>
        </NavLink>
        <button
          className="btn"
          onClick={() => {
            setView("course");
          }}
        >
          Add course
        </button>
      </div>
      <div>{view === "blog" ? <BlogPanel /> : <CoursePanel />}</div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  .cont {
    margin-top: 20px;
    padding-top: 14rem;
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: auto;
    background: linear-gradient(
      45deg,
      #fff,
      ${({ theme }) => theme.colors.btn}
    );
  }

  .btn {
    padding: 8px 2px;
    background-color: #007bff;
    color: white;
    border: 2px solid #007bff;
    border-radius: 14px;
    cursor: pointer;
    width: auto;
    margin: 3rem;
  }
`;
export default AdminComponent;
