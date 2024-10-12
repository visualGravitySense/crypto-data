// src/components/Hero.jsx
import React from "react";
import "./HeroClasses.css"; // Импорт стилей для компонента

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseInfo from "./CourseInfo";

const HeroClasses = ({ theme }) => {
  return (
    <section className="hero-classes">
      <div className="hero-content">
      <Row>
        {/* Хлебные крошки */}
        <nav className="breadcrumb-nav">
          <a href="/">Home</a> &gt; <a href="/courses">Classes</a> &gt;{" "}
          <a href="/courses/current">Current class</a>
        </nav>
        <h1>Frontend and React</h1>
        <p>
          Online class
        </p>
        
      
      <Col md={6}>
        <div className="course-details">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`star ${index < 4 ? "filled" : ""}`}>
                &#9733;
              </span>
            ))}
          </div>
          <p className="instructor-name">Category: Development</p>
          <p className="last-updated">Last update: September 2024</p>
          <p className="language">Level: Junior</p>
        </div>
        <button className="cta-button">Join</button>
      </Col>
      <Col md={6}>
      <CourseInfo />
      </Col>
      </Row>
      </div>
    </section>
  );
};

export default HeroClasses;
