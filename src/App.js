// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomeComponent from "./modules/home/HomeComponent";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Routes,
} from "react-router-dom";

import CourseComponent from "./modules/course/CourseComponent";
import ContactComponent from "./modules/contact/ContactComponent";
import AboutComponent from "./modules/about/AboutComponent";
import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./modules/GlobalStyle";
import Home from "./modules/home/Home";
import Error from "./modules/Error";
import GotoTop from "./modules/GotoTop";
import Home2 from "./modules/home/Home2";
import BlogComponent from "./modules/blog/BlogComponent";
import Reviews from "./modules/home/Reviews";
import BlogDetails from "./modules/blog/BlogDetail";
import AdminComponent from "./modules/admin/AdminComponent";
import { AdminPanel } from "./modules/admin/BlogPanel";
import { AdminLoginComponent } from "./modules/admin/AdminLoginComponent";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("adminToken"); //31

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: " rgb(24 24 29)",
      white: "#fff",
      black: "212529",
      helper: "#8490ff",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      bg: "rgb(249 249 255)",
      footer_bg: "#011435",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252 ) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.2) 0px 1px 2px 3px 0px ,rgba(27, 31, 35, 0.15) 0px 0px 0px",
      shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px ",
    },
    media: { smobile: "365px", mobile: "617px", tab: "998px", pc: "1200px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/blogs" element={<BlogComponent />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/blogsdetails" element={<BlogDetails />} />
          <Route path="/admin/login" element={<AdminLoginComponent />} />
          <Route path="/admin" element={<AdminComponent />} />

          <Route path="/courses" element={<CourseComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/about" element={<AboutComponent />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <GotoTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
