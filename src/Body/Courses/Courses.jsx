import React from "react";

import AllCourses from "./AllCourses";
// import CourseCategories from "../components/CourseCategories";
// import PopularCourses from "./components/PopularCourses";
import PromoBanners from "./PromoBanners";
// import AboutSection from "./components/AboutSection";
// import StudentTestimonials from "../components/StudentTestimonials";

import CourseFilters from "./CourseFilters";  
import CourseSorting from './CourseSorting';

const Courses = () => {
  return (
    <div className="home-page">
      <CourseFilters/>
      <CourseSorting/>
      <AllCourses />
      <PromoBanners />
      {/* <CourseCategories theme={theme} />
      <PopularCourses theme={theme} />
      <AboutSection theme={theme} />
      <StudentTestimonials theme={theme} /> */}
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default Courses;
