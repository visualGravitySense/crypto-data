import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './AboutSection.scss';
import { FaTelegram, FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import aboutImage from '../assets/profile.png'; 


const AboutSection = () => {
  // URL изображения из JSONPlaceholder
  // const imageUrl = '/src/assets/profile.png';

  return (
    
          
          
      <section className="about-section">      
        <h2>About Us</h2>

            <div className="about-container">
              
              <div className="about-info">
                
                <p>
                We are passionate about cryptocurrency and dedicated to empowering users with innovative tools. Our team of experts conducts in-depth research to understand the ever-evolving crypto landscape, ensuring that our solutions are both intuitive and effective. Whether you're a seasoned trader or just starting your journey, we strive to provide you with the resources you need to navigate the world of digital currencies with confidence. Join us as we explore the future of finance together!                </p>
                <p>
                </p><br></br>
                
                <div className="social-icons">
                  <a href="https://github.com/visualGravitySense/crypto-data" target="_blank" aria-label="GitHub"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/dmitri-gornakov-7a664840/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
                 
                </div>
                {/* <Button className="m-2" variant="primary" href="/courses">Мое обучение</Button> */}
                {/* <Button className="m-2" variant="outline-secondary" href="/signup">Стать преподавателем</Button> */}
              
              </div>
            </div>
            
            
          </section>
          
          
          
         
    
  );
};

export default AboutSection;
