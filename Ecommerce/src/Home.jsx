import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <h1>Welcome to Our K-Ecommerce Store!</h1>
        <p>Welcome to K-Ecommerce, your one-stop destination for all things Kpop! Dive into the world of Korean pop culture with our wide variety of merchandise and collectibles featuring your favorite Kpop idols and groups..</p>
        <Link to="/shop" className="btn-primary">Shop Now</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
