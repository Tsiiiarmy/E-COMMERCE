import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsPage.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const DetailsPage = () => {
  const product = {
    id: 1,
    name: 'Army Bomb',
    price: '$99.99',
    description: '',
    image: '../images/army bomb.jpg',
  };

  return (
    <div>
      <Header />
      <div className="details-container">
        <div className="product-image">
          <img src={`images/${product.image}`} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <Link to="/cart" className="btn-primary">Add to Cart</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
