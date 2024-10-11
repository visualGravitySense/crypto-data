// UserDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Favourites from './Favourites';
import CheckOut from './CheckOut';
import CheckOutForm from './CheckOutForm';
import UserProfile from './UserProfile';
import "./Favourites.scss";


const UserDetail = () => {
  // Получаем userId из параметров маршрута
  const { userId } = useParams();

  // Пример данных для продуктов
  const products = [
    { name: 'Product 1', quantity: 2, price: 19.99 },
    { name: 'Product 2', quantity: 1, price: 49.99 },
    { name: 'Product 3', quantity: 3, price: 9.99 },
  ];

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
    {/* <div style={{ padding: '20px' }}>
      <h1>Profile of {user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div> */}

    <UserProfile />

    <Favourites />

    {/* <CheckOut products={products} />
    <CheckOutForm /> */}

    <div className="checkout-container ">
      {/* Блок с таблицей продуктов */}
      <CheckOut products={products} />

      {/* Блок с формой оформления заказа */}
      <CheckOutForm />
    </div>

    </>
  );
};

export default UserDetail;
