import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./CourseFilters.css"; // Добавьте стили для фильтров

const CourseFilters = ({ onFilter }) => {
  // Локальные состояния для фильтров
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  // Функция для применения фильтров
  const handleFilter = () => {
    onFilter({ category, level, price, rating });
  };

  return (
    <section className="course-filters">
      <h3>Courses search</h3>
      <Form>
        <Row>
          {/* Фильтр по категориям */}
          <Col md={3}>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All categories</option>
                <option value="design">Design</option>
                <option value="programming">Development</option>
                <option value="business">Business</option>
                <option value="music">Music</option>
                <option value="art">Art</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Фильтр по уровню */}
          <Col md={3}>
            <Form.Group controlId="level">
              <Form.Label>Level</Form.Label>
              <Form.Control
                as="select"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">All levels</option>
                <option value="beginner">Junior</option>
                <option value="intermediate">Middle</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Фильтр по стоимости */}
          <Col md={3}>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                as="select"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="">Any</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Фильтр по рейтингу */}
          <Col md={3}>
            <Form.Group controlId="rating">
              <Form.Label>Raiting</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">All ratings</option>
                <option value="4">4+ stars</option>
                <option value="3">3+ stars</option>
                <option value="2">2+ stars</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button className="btn-apply-filters" onClick={handleFilter}>
          Use filters
        </Button>
      </Form>
    </section>
  );
};

export default CourseFilters;
