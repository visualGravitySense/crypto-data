import React from "react";
import HeroClasses from "./HeroClasses";
// import CourseInfo from "./CourseInfo";
// import FeaturedCourses from "./components/FeaturedCourses";
// import CourseCategories from "../components/CourseCategories";
// import PopularCourses from "./components/PopularCourses";
// import PromoBanners from "./components/PromoBanners";
// import AboutSection from "./components/AboutSection";
// import StudentTestimonials from "../../components/StudentTestimonials";
import "./Courses.css";


const CourseDetail = ({ theme, toggleTheme }) => {
  return (
    <div className={`home-page ${theme === "dark" ? "dark-mode" : ""}`}>

      <HeroClasses theme={theme} toggleTheme={toggleTheme} />
      
      
      
        
      {/* <StudentTestimonials theme={theme} /> */}
      {/* <FeaturedCourses theme={theme} toggleTheme={toggleTheme} />
      <CourseCategories theme={theme} />
      <PopularCourses theme={theme} />
      <PromoBanners theme={theme} />
      <AboutSection theme={theme} />
      <StudentTestimonials theme={theme} /> */}
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default CourseDetail;
