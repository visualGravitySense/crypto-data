// AllCourses.jsx
import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap'; // Импортируем необходимые компоненты Bootstrap
import './FeaturedCourses.scss';

import CourseCard from './CourseCard';
import Pagination from './Pagination';

const AllCourses = ({ theme }) => {
  
  const courses = [
    {
      id: 1,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '49',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '29',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '49',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 4,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '29',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '49',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 6,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '29',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '49',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 8,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '29',
      image: 'https://via.placeholder.com/150'
    },
    // More courses here
    // Добавьте другие курсы в этот массив
  ];



  return (
    <section className={`featured-courses ${theme === 'dark' ? 'dark-mode' : ''}`}>

      {/* <CourseFilters />
      <CourseSorting /> */}
      {/* <h1> </h1> */}
      <h2>All courses</h2>
      
      <div className="featured-courses">
        

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        
        <Pagination 
            // currentPage={currentPage} 
            // totalPages={totalPages} 
            // onPageChange={handlePageChange} 
          />
        
      </div>
      
    </section>
  );
};

export default AllCourses;

