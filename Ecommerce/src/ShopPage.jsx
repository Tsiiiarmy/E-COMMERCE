import React from "react";
import { Link } from "react-router-dom";
import "./ShopPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Army Bomb",
      price: "$99.99",
      image: "../images/army bomb.jpg",
    },
    {
      id: 2,
      name: "k-pop Merchs",
      price: "$49.99",
      image: "../images/k-pop merchs.jpg",
    },
    {
      id: 3,
      name: "Hoddie",
      price: "$76.99",
      image: "../images/hoddie.jpg",
    },
    {
      id: 4,
      name: "Light Stick ",
      price: "$452.99",
      image: "../images/light stick.jpg",
    },
    {
      id: 5,
      name: "K-STUFF Bag ",
      price: "$90.99",
      image: "../images/bags.jpg",
    },
    { id: 6, name: "Water Bottel", price: "$22.99", image: "../images/water bottle.jpg" },
    { id: 7, name: "Album ", price: "$78.99", image: "../images/album.jpg" },
    { id: 8, name: "Exo Tour Stuff", price: "$555.99", image: "../images/exo tour stuff.jpg" },
    { id: 9, name: "Bts Airpod ", price: "$129.99", image: "../images/bts airpods.jpg" },
    {
      id: 10,
      name: "Stickers and Photocards",
      price: "$311.99",
      image: "../images/s&p.jpg",
    },
    { id: 11, name: "T-shirts ", price: "$89.99", image: "../images/t shirt.jpg" },
    { id: 12, name: "Tote bags ", price: "$259.99", image: "../images/tote bags.jpg" },
    { id: 13, name: "K-Drama merch ", price: "$300.99", image: "../images/kdrama merchs.jpg" },
    { id: 14, name: "Rameyon ", price: "$129.99", image: "../images/rameyon.jpg" },
  ];

  return (
    <div>
      <Header />
      <div className="shop-container">
        <h2>Shop Categories/Items</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`images/${product.image}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/details/${product.id}`} className="btn-secondary">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
