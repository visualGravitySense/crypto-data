import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './CourseCard.css'; // Optional: For styling the component

const CourseCard = ({ course }) => {
  return (
    <Card className="course-card">
      <Card.Img variant="top" src={course.image} alt={course.title} className="course-image" />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text className="course-description">
          {course.description}
        </Card.Text>
        <div className="course-price">
          <strong>Price: {course.price} €</strong>
        </div>
        <Button variant="primary" href={`/courses/${course.id}`} className="btn-course-details">
          Details
        </Button>
        <Button variant="secondary" className="btn-add-to-cart" onClick={() => handleAddToCart(course.id)}>
          To checkout
        </Button>
      </Card.Body>
    </Card>
  );
};


// Function to handle adding the course to the cart (logic would go here)
const handleAddToCart = (courseId) => {
  console.log(`Course with ID: ${courseId} added to cart`);
};


// Function to handle adding the course to the cart (logic would go here)
// const handleAddToCart = (courseId) => {
//   console.log(`Course with ID: ${courseId} added to cart`);
// };

export default CourseCard;
