import React from "react";
import {
  FaVideo,
  FaTasks,
  FaMobileAlt,
  FaTv,
  FaInfinity,
  FaCertificate,
} from "react-icons/fa"; // Импортируем иконки
import "./CourseInfo.css"; // Импорт стилей

const CourseInfo = ({ theme }) => {
  return (
    <section className={`course-info ${theme === "dark" ? "dark-mode" : ""}`}>
      <h2>Content</h2>
      <ul className="course-info-list">
        <li>
          <FaVideo className="icon" />
          <span>8 h video tutorial</span>
        </li>
        <li>
          <FaTasks className="icon" />
          <span>Home works</span>
        </li>
        <li>
          <FaMobileAlt className="icon" />
          <span>Mobile version</span>
        </li>
        <li>
          <FaTv className="icon" />
          <span>Desctope version</span>
        </li>
        <li>
          <FaInfinity className="icon" />
          <span>All sources</span>
        </li>
        {/* <li>
          <FaCertificate className="icon" />
          <span>Сертификат об окончании</span>
        </li> */}
      </ul>
    </section>
  );
};

export default CourseInfo;
