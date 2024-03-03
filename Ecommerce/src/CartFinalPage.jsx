import React from 'react';
import { Link } from 'react-router-dom';
import './CartFinalPage.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartFinalPage = () => {
  return (
    <div>
      <Header />
      <div className="cart-final-container">
        <h2>Order Summary</h2>
        <div className="bought-items">
          <h3>Bought Items:</h3>
          {/* Display bought items */}
          <ul>
            <li>Army Bomb</li>
            <li>Exo stuffs</li>
            <li>k-pop merch</li>
            <li>Stickers and Photocards</li>
            <li>Water Bottles</li>
            <li>Light Stick</li>
            <li>Hoodie</li>
          </ul>
        </div>
        <div className="success-message">
          <h3>Success Message:</h3>
          <p>Your order has been placed successfully.</p>
        </div>
        <div className="confirmation-section">
          <h3>Confirmation:</h3>
          <p>Your order will be delivered within 3 to 5 days.</p>
        </div>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default CartFinalPage;
