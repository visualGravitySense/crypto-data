// UserDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Favourites from './Favourites';

const UserDetail = () => {
  // Получаем userId из параметров маршрута
  const { userId } = useParams();

  // Загрузка данных пользователя (в реальном приложении данные можно загрузить с сервера)
  const users = {
    1: { name: 'John Doe', email: 'john@example.com', bio: 'Full-stack developer' },
    2: { name: 'Jane Smith', email: 'jane@example.com', bio: 'UI/UX designer' },
    // Добавьте других пользователей по необходимости
  };

  const user = users[userId];

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <>
    <div style={{ padding: '20px' }}>
      <h1>Profile of {user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>

    <Favourites />

    </>
  );
};

export default UserDetail;
