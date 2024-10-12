import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./CourseSorting.css"; // Добавляем стили

const CourseSorting = ({ onSort }) => {
  // Локальное состояние для сортировки
  const [sortOption, setSortOption] = useState("");

  // Функция для обработки сортировки
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSort(selectedOption);
  };

  return (
    <section className="course-sorting">
      <h3>Course sorting</h3>
      <Form>
        <Form.Group controlId="sort">
          <Form.Label>Sort by:</Form.Label>
          <Form.Control
            as="select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Choose options</option>
            <option value="date">Date</option>
            <option value="popularity">
              Popularity (by studients)
            </option>
            <option value="rating">Raiting</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
};

export default CourseSorting;
