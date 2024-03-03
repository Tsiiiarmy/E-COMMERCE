import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {


  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Army Bomb', price: '$99.99', quantity: 1 },
    { id: 2, name: 'K-pop Merchs', price: '$49.99', quantity: 2 },
    { id: 3, name: 'Hoddie', price: '$76.99', quantity: 8 },
    { id: 4, name: 'Light Stick', price: '$453.99', quantity: 2 },
    { id: 5, name: 'k-STUFF Bag', price: '$90.99', quantity: 10 },
    { id: 6, name: 'Water Bottle', price: '$22.99', quantity: 6 },
    { id: 7, name: 'Album', price: '$78.99', quantity: 2 },
    { id: 8, name: 'Exo Tour Stuff', price: '$555.99', quantity: 2 },
    { id: 9, name: 'BTS Airpod', price: '$129.99', quantity: 24 },
    { id: 10, name: 'Stickers and PhotoCards', price: '$311.99', quantity: 62 },
    { id: 11, name: 'T-Shirts', price: '$89.99', quantity: 12 },
    { id: 12, name: 'Tote bags', price: '$259.99', quantity: 2 },
    { id: 13, name: 'K-Drama merch', price: '$300.99', quantity: 37 },
    { id: 14, name: 'Rameyon', price: '$129.99', quantity: 20 }
  ]);


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.quantity), 0).toFixed(2);
  };


  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/shop">Shop now</Link></p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: ${calculateTotal()}</h3>
            </div>
            <Link to="/cart-final" className="btn-primary">Proceed to Checkout</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

