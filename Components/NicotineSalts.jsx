import React, { useState } from 'react';
import './NicotineSalts.css'; 

import nicotineSalts1 from '../assets/nicotine salts 1.jpg';
import nicotineSalts2 from '../assets/nicotine salts 2.jpg';
import nicotineSalts3 from '../assets/nicotine salts 3.jpg';
import nicotineSalts4 from '../assets/nicotine salts 4.jpg';
import nicotineSalts5 from '../assets/nicotine salts 5.jpg';
import nicotineSalts6 from '../assets/nicotine salts 6.jpg';
import nicotineSalts7 from '../assets/nicotine salts 7.jpg';
import nicotineSalts8 from '../assets/nicotine salts 8.jpg';
import nicotineSalts9 from '../assets/nicotine salts 9.jpg';
import nicotineSalts10 from '../assets/nicotine salts 10.jpg';

const nicotineSaltsProducts = [
  { id: 1, name: 'Allo E-Liquid 30ml Nic Salts', price: '$10', img: nicotineSalts1 },
  { id: 2, name: 'Chosen Salts', price: '$15', img: nicotineSalts2 },
  { id: 3, name: 'Supreme Soda Lemon Salt', price: '$12', img: nicotineSalts3 },
  { id: 4, name: 'Frozen Chosen Nic-Salts', price: '$20', img: nicotineSalts4 },
  { id: 5, name: 'Sun Bear Nicotine Salts', price: '$25', img: nicotineSalts5 },
  { id: 6, name: 'Simply Salts 30ml Vape Juices', price: '$30', img: nicotineSalts6 },
  { id: 7, name: 'E-CigOZ Salts', price: '$40', img: nicotineSalts7 },
  { id: 8, name: 'Creamio Vape Juice', price: '$40', img: nicotineSalts8 },
  { id: 9, name: 'Supreme Soda Nicotine Salts', price: '$40', img: nicotineSalts9 },
  { id: 10, name: 'Remarkable Nicotine Salts', price: '$40', img: nicotineSalts10 },
];

const NicotineSalts = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="nicotine-salts-container">
      <h2 className="nicotine-salts-title">Nicotine Salts Vape Juices</h2>
      <div className="nicotine-salts-grid">
        {nicotineSaltsProducts.map((product, index) => (
          <div
            key={product.id}
            className={`nicotine-salts-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="nicotine-salts-image"
            />
            <div className="nicotine-salts-details">
              <h3 className="nicotine-salts-name">{product.name}</h3>
              <p className="nicotine-salts-price">{product.price}</p>
              <button className="buy-now-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NicotineSalts;
