import React from "react";

import AllCourses from "../../components/AllCourses";
// import CourseCategories from "../components/CourseCategories";
// import PopularCourses from "./components/PopularCourses";
import PromoBanners from "../../components/PromoBanners";
// import AboutSection from "./components/AboutSection";
// import StudentTestimonials from "../components/StudentTestimonials";
import "./Courses.css";

const Courses = ({ theme, toggleTheme }) => {
  return (
    <div className={`home-page ${theme === "dark" ? "dark-mode" : ""}`}>
      <AllCourses theme={theme} toggleTheme={toggleTheme} />
      <PromoBanners theme={theme} />
      {/* <CourseCategories theme={theme} />
      <PopularCourses theme={theme} />
      <AboutSection theme={theme} />
      <StudentTestimonials theme={theme} /> */}
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default Courses;
