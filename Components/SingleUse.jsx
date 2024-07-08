import React, { useState } from 'react';
import './SingleUse.css'; 

import singleUse1 from '../assets/single use 1.jpg';
import singleUse2 from '../assets/single use 2.jpg';
import singleUse3 from '../assets/single use 3.jpg';
import singleUse4 from '../assets/single use 4.jpg';
import singleUse5 from '../assets/single use 5.jpg';
import singleUse6 from '../assets/single use 6.jpg';
import singleUse7 from '../assets/single use 7.jpg';
import singleUse8 from '../assets/single use 8.jpg';

const singleUseProducts = [
  { id: 1, name: 'IGET Bar 3500puffs Disposable', price: '$10', img: singleUse1 },
  { id: 2, name: 'Cloudy Booster 10k Disposable Vape', price: '$15', img: singleUse2 },
  { id: 3, name: 'Go2 6500 Disposable Vape Compliant', price: '$12', img: singleUse3 },
  { id: 4, name: 'Dragbar Disposable Vape 5k', price: '$20', img: singleUse4 },
  { id: 5, name: 'IGet Moon Disposable Vape', price: '$25', img: singleUse5 },
  { id: 6, name: 'Bud Disposable Vape Com', price: '$30', img: singleUse6 },
  { id: 7, name: 'Relx Magic Go 4000', price: '$40', img: singleUse7 },
  { id: 8, name: 'Relx Magic Go 8000i', price: '$40', img: singleUse8 },
];

const SingleUse = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="single-use-container">
      <h2 className="single-use-title" style={{ fontSize: '40px', fontFamily: 'monospace' }}>Disposable Vapes Single Use</h2>
      <div className="single-use-grid">
        {singleUseProducts.map((product, index) => (
          <div
            key={product.id}
            className={`single-use-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="single-use-image"
            />
            <div className="single-use-details">
              <h3 className="single-use-name">{product.name}</h3>
              <p className="single-use-price">{product.price}</p>
              <button className="buy-now-button" style={{ backgroundColor: '#007bff' }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleUse;
