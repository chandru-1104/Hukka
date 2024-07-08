import React, { useState } from 'react';
import './RefillablePods.css'; 

import refillablePods1 from '../assets/refillable 1.jpg';

const RefillablePodsProduct = {
  id: 1,
  name: 'Uwell Caliburn G3 Replacement Pods',
  price: '$10',
  img: refillablePods1,
};

const RefillablePods = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <div className="refillable-pods-container">
      <h2 className="refillable-pods-title">Refillable Pods, Coils, Tanks & Accessories</h2>
      <p style={{
        fontFamily: 'cursive',
        padding: '10px',
        textAlign: 'justify',
        WebkitBackgroundClip: 'text',
        fontSize: '15px',
        backgroundClip: 'text',
        color: 'AppWorkspace'
      }}>
        The pod is attached to the body, or the battery portion of the system, to fire the coil within the pod vaporize the eJuice within.
      </p>
      <div className="refillable-pods-grid">
        <div
          key={RefillablePodsProduct.id}
          className={`refillable-pods-item ${zoomed ? 'zoomed' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={RefillablePodsProduct.img}
            alt={RefillablePodsProduct.name}
            className="refillable-pods-image"
          />
          <div className="refillable-pods-details">
            <h3 className="refillable-pods-name">{RefillablePodsProduct.name}</h3>
            <p className="refillable-pods-price">{RefillablePodsProduct.price}</p>
            <button className="buy-now-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefillablePods;
