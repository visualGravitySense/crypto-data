import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import "../../Users/Favourites.scss";

const DashboardProfile = ({ theme }) => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'alexey@example.com',
    courses: [
      { title: 'React JS', progress: '80%' },
      { title: 'Web Design', progress: '100%' },
      { title: 'React JS', progress: '80%' },
      { title: 'Web Design', progress: '100%' },
    ],
  });

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <section className={`profile-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="checkout-container">
        <div className="checkout-section">
        <h2>Profile</h2>  
        <div className="profile-info">
        {!editing ? (
          <>
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <Button className="btn-edit" onClick={handleEditToggle}>Edit profile</Button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="edit-input"
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="edit-input"
            />
            <Button className="btn-save" onClick={handleEditToggle}>Сохранить</Button>
          </>
        )}
      </div> 
        </div>
        <div className="checkout-section">
        <h2>Progress:</h2>   
        <h3>Current classes:</h3>
      <div className="user-courses">
        {userInfo.courses.length > 0 ? (
          userInfo.courses.map((course, index) => (
            <div key={index} className="course-card">
              <h4>{course.title}</h4>
              <p>Progress: {course.progress}</p>
            </div>
          ))
        ) : (
          <p>No classes</p>
        )}
      </div>

        </div>
         
      </div>
      
      
      

      

      
    </section>
  );
};

export default DashboardProfile;
