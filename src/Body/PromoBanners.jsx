import React, { useEffect, useState } from 'react';
import './PromoBanners.css';

const PromoBanners = ({ theme }) => {
  const [promos] = useState([
    {
      title: 'Frontend',
      description: 'React: experience in building complex user interfaces, single-page applications, and dynamic dashboards, ensuring real-time data integration. Vue: Expertise in customizing functionality using a component-based architecture to deliver responsive and scalable solutions.',
      // instructor: 'Dmitri Gornakov',
      // image: 'https://via.placeholder.com/800x400',
    },
    {
      title: 'Backend',
      description: 'Node.js: Developing server-side logic for web applications, working with APIs, and building microservices to ensure efficient and scalable backend architectures. Python: Automating processes, creating RESTful APIs, and integrating with various services to streamline workflows and enhance functionality.',
      // instructor: 'Dmitri Gornakov',
      // image: 'https://via.placeholder.com/800x400',
    },
    {
      title: 'Additional',
      description: 'HTML/CSS: Crafting responsive and cross-browser compatible pages using modern approaches to animations and grid systems. Bootstrap: Rapid development of user-friendly and adaptive interfaces by leveraging pre-built components and responsive design principles. ',
      // instructor: 'Dmitri Gornakov',
      // image: 'https://via.placeholder.com/800x400',
      
    },
    
  ]);

  return (
    <section className={`promo-banners ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Skills</h2>
      <div className="promo-container">
        {promos.map((promo, index) => (
          <div key={index} className="promo-card">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            {/* <a href={promo.link} className="promo-btn">
              {promo.cta}
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
