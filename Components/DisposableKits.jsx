import React, { useState } from 'react';
import './DisposableKits.css'; 

import disposableKit1 from '../assets/disposable kit 1.jpg';
import disposableKit2 from '../assets/disposable kit 2.jpg';
import disposableKit3 from '../assets/disposable kit 3.jpg';
import disposableKit4 from '../assets/disposable kit 4.jpg';
import disposableKit5 from '../assets/disposable kit 5.jpg';
import disposableKit6 from '../assets/disposable kit 6.jpg';
import disposableKit7 from '../assets/disposable kit 7.jpg';

const disposableKitsProducts = [
  { id: 1, name: 'Inmood 10K Puffs Disposable Kit', price: '$10', img: disposableKit1 },
  { id: 2, name: 'Allo Nexus Disposable Vape Kit 6K', price: '$15', img: disposableKit2 },
  { id: 3, name: 'I GET BAR PLUS 6k Disposable Kit', price: '$12', img: disposableKit3 },
  { id: 4, name: 'Vorteke-PUK Battery', price: '$20', img: disposableKit4 },
  { id: 5, name: 'Inmood Switch Pod Kit', price: '$25', img: disposableKit5 },
  { id: 6, name: 'Bud Battery', price: '$30', img: disposableKit6 },
  { id: 7, name: 'Cloudys Maxx 7000 Puff Pod Kit', price: '$40', img: disposableKit7 },
];

const DisposableKits = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="disposable-kits-container">
      <h2 className="disposable-kits-title">Disposable Kits</h2>
      <div className="disposable-kits-grid">
        {disposableKitsProducts.map((product, index) => (
          <div
            key={product.id}
            className={`disposable-kit-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="disposable-kit-image"
            />
            <div className="disposable-kit-details">
              <h3 className="disposable-kit-name">{product.name}</h3>
              <p className="disposable-kit-price">{product.price}</p>
              <button className="buy-now-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisposableKits;
