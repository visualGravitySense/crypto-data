import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./Favourites.scss";

const Favourites = ({}) => {
  // All Courses list
  const favouriteCourses = [
    {
      title: "React JS",
      instructor: "React Instructor",
      price: "49 €",
    },
    {
      title: "Graphick Design",
      instructor: "UX Designer",
      price: "39 €",
    },
    {
      title: "Junior Web Designer",
      instructor: "Web Developer",
      price: "49 €",
    },
    {
      title: "UX UI Design",
      instructor: "UX Designer",
      price: "39 €",
    },
    {
      title: "React JS Next",
      instructor: "Web Developer",
      price: "49 €",
    },
    {
      title: "Web Design",
      instructor: "Web Developer",
      price: "39 €",
    },
    // Добавьте другие избранные курсы
  ];

  // Состояние для активного таба
  const [activeTab, setActiveTab] = useState("All");

  // Фильтрация курсов по табам
  const filteredCourses =
    activeTab === "All"
      ? favouriteCourses
      : favouriteCourses.filter((course) => course.status === "unread"); // Замените 'unread' на нужное условие

  return (
    <div>
      {/* Секция с курсами */}
      <section className="favourites-section">
        <h2>Favourites</h2>

        {/* Anti Design Tabs */}
        <div className="tabs">
          <Button
            onClick={() => setActiveTab("All")}
            className={`tab-button ${activeTab === 'All' ? 'active-tab' : ''}`}
          >
            All
          </Button> 
          <Button
            onClick={() => setActiveTab("New")}
            className={`tab-button ${activeTab === 'New' ? 'active-tab' : ''}`}
          >
            New
          </Button>
          <Button
            onClick={() => setActiveTab("Unread")}
            className={`tab-button ${activeTab === 'Unread' ? 'active-tab' : ''}`}
          >
            Unread
          </Button>
        </div>

        <div className="favourite-courses">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="favourite-card">
                <h3>{course.title}</h3>
                <p>Teacher: {course.instructor}</p>
                <p>Price: {course.price}</p>
                <Button className="btn-remove">Remove from list</Button>
              </div>
            ))
          ) : (
            <p>No favoutites courses.</p>
          )}
        </div>
        <Button className="btn-checkout">Go to check out</Button>
      </section>
    </div>
  );
};

export default Favourites;
