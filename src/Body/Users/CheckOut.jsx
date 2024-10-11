
import React, { useState } from 'react';
import "./Favourites.scss";

// const products = [
//     { name: 'Product 1', quantity: 2, price: 19.99 },
//     { name: 'Product 2', quantity: 1, price: 49.99 },
//     { name: 'Product 3', quantity: 3, price: 9.99 },
//   ];


  

const CheckOut = ({ products }) => {
  // Функция для расчета общей суммы
  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  

  return (
    <div className="checkout-section">
      <h2>Your Cart</h2>
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="checkout-total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default CheckOut;
