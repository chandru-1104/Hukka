import React, { useState } from 'react';
import './DisposablePods.css'; 


import disposablePods1 from '../assets/disposable pod 1.jpg';
import disposablePods2 from '../assets/disposable pod 2.jpg';
import disposablePods3 from '../assets/disposable pod 3.jpg';
import disposablePods4 from '../assets/disposable pod 4.jpg';
import disposablePods5 from '../assets/disposable pod 5.jpg';
import disposablePods6 from '../assets/disposable pod 6.jpg';
import disposablePods7 from '../assets/disposable pod 7.jpg';

const disposablePodsProducts = [
  { id: 1, name: 'IGET Bar Plus Prefilled PODs 2.0', price: '$10', img: disposablePods1 },
  { id: 2, name: 'Inmood 10k Puffs Pods', price: '$15', img: disposablePods2 },
  { id: 3, name: 'Allo Nexus Disposable Pods 6k Puffs', price: '$12', img: disposablePods3 },
  { id: 4, name: 'Inmood Switch Pod', price: '$20', img: disposablePods4 },
  { id: 5, name: 'Cloudys Maxx 7000 Puff Replacement Pod', price: '$25', img: disposablePods5 },
  { id: 6, name: 'Bud Disposable Pods', price: '$30', img: disposablePods6 },
  { id: 7, name: 'Vorteke-PUK. Disposable Pod', price: '$40', img: disposablePods7 },
];

const DisposablePods = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="disposable-pods-container">
      <h2 className="disposable-pods-title">Disposable Pods</h2>
      <div className="disposable-pods-grid">
        {disposablePodsProducts.map((product, index) => (
          <div
            key={product.id}
            className={`disposable-pods-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="disposable-pods-image"
            />
            <div className="disposable-pods-details">
              <h3 className="disposable-pods-name">{product.name}</h3>
              <p className="disposable-pods-price">{product.price}</p>
              <button className="buy-now-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisposablePods;
