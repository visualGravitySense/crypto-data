import React, { useState } from 'react';
// import './Checkout.css'; // Optional, if you want to style it separately
import './Favourites.scss';
// import Favourites from "./Favourites";  
// import AllCourses from "../components/AllCourses";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.paymentMethod) validationErrors.paymentMethod = 'Payment method is required';

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Proceed with order logic here
      alert('Order confirmed!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (

    <>
    

    <div className='favourites-section'>
      {/* <Favourites /> */}
    <div className="checkout-container">
      {/* <h2>Checkout</h2> */}

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          {errors.paymentMethod && <small className="error">{errors.paymentMethod}</small>}
        </div>

        <button type="submit" className="submit-btn">Confirm Order</button>
      </form>
    </div>
    </div>

    {/* <AllCourses />  */}

    </>
  );
};

export default CheckoutForm;
