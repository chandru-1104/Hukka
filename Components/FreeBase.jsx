import React, { useState } from 'react';
import './FreeBase.css'; 

import freeBase1 from '../assets/free base 1.jpg';
import freeBase2 from '../assets/free base 2.jpg';
import freeBase3 from '../assets/free base 3.jpg';
import freeBase4 from '../assets/free base 4.jpg';
import freeBase5 from '../assets/free base 5.jpg';
import freeBase6 from '../assets/free base 6.jpg';
import freeBase7 from '../assets/free base 7.jpg';

const freeBaseProducts = [
  { id: 1, name: 'Remarkable Freebase', price: '$10', img: freeBase1 },
  { id: 2, name: 'Simply 60ml Vape Juices', price: '$15', img: freeBase2 },
  { id: 3, name: 'Frozen Chosen Freebase', price: '$12', img: freeBase3 },
  { id: 4, name: 'Chosen Premium Freebase E-liquid', price: '$20', img: freeBase4 },
  { id: 5, name: 'Creamio Freebase', price: '$25', img: freeBase5 },
  { id: 6, name: 'Supreme Soda Lemon Freebase', price: '$30', img: freeBase6 },
  { id: 7, name: 'Supreme Soda Freebase', price: '$40', img: freeBase7 },
];

const FreeBase = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="free-base-container">
      <h2 className="free-base-title">Freebase Vape Juices</h2>
      <div className="free-base-grid">
        {freeBaseProducts.map((product, index) => (
          <div
            key={product.id}
            className={`free-base-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="free-base-image"
            />
            <div className="free-base-details">
              <h3 className="free-base-name">{product.name}</h3>
              <p className="free-base-price">{product.price}</p>
              <button className="buy-now-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeBase;
