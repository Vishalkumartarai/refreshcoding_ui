import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const AdminLoginComponent = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  let navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { resetForm, setFieldError }) => {
      const data = {
        email: values.email,

        password: values.password,
      };

      const apiUrl = "http://localhost:5000/auth/login";

      axios
        .post(apiUrl, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else if (response.status === 401) {
            setUnauthorized(true);
          } else {
            throw new Error("Network response was not ok");
          }
        })

        .then((r) => {
          console.log(r);
          localStorage.setItem("user", JSON.stringify(r));

          navigator("/admin");
        })

        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <Wrapper>
      <div className="container">
        <form
          onSubmit={formik.handleSubmit}
          className="custom"
          style={{ boxShadow: "0 0 10px black" }}
        >
          <h1 className="common-heading">Admin Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email-Id
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              placeholder="jhon@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-danger small">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="*****"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-danger small">{formik.errors.password}</p>
            )}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    width: 50vw;
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
  .mb-4 {
    margin: 4rem;

    width: auto;
  }
  .form-label {
    font-size: 2rem;
    font-weight: 488;
    margin: 0.5rem;
    position: relative;
  }
  .form-control {
    border: 2px solid #007bff;
    width: 25vw;
  }

  .btn {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 2rem;
  }

  .btn:hover {
    background-color: #0056b3;
  }
`;

// import React, { useState } from 'react';

// const AdminLoginComponent = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const token = data.token;

//         localStorage.setItem('adminToken', token);
//         // Redirect to admin dashboard upon successful login
//         window.location.href = '/admin/dashboard'; // Replace with your admin dashboard route
//       } else {
//         console.log('Login failed');
//         // Handle error or display an error message to the user
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleLogin();
//         }}
//       >
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default  AdminLoginComponent;
