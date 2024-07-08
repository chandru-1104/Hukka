import React, { useState } from 'react';
import './AdvanceVape.css'; 


import advanceVape1 from '../assets/advance 1.jpg';
import advanceVape2 from '../assets/advance 2.jpg';
import advanceVape3 from '../assets/advance 3.jpg';
import advanceVape4 from '../assets/advance 4.jpg';
import advanceVape5 from '../assets/advance 5.jpg';
import advanceVape6 from '../assets/advance 6.jpg';
import advanceVape7 from '../assets/advance 7.jpg';
import advanceVape8 from '../assets/advance 8.jpg';

const AdvanceVapeProducts = [
  { id: 1, name: 'Geekvape Legend 2 Vape Kit 200w', price: '$10', img: advanceVape1 },
  { id: 2, name: 'Voopoo Drag X Kit', price: '$15', img: advanceVape2 },
  { id: 3, name: 'Voopoo X Kit 3', price: '$12', img: advanceVape3 },
  { id: 4, name: 'Voopoo Argus Pro Kit 80w', price: '$20', img: advanceVape4 },
  { id: 5, name: 'Geekvape Aegis 200w Box Mod', price: '$25', img: advanceVape5 },
  { id: 6, name: 'Vaaporesso Luxe II Vape Kit', price: '$30', img: advanceVape6 },
  { id: 7, name: 'FreeMaX Gemm 80w Kit', price: '$40', img: advanceVape7 },
  { id: 8, name: 'Vaporesso Target 80 Vape Kit', price: '$50', img: advanceVape8 },
];

const AdvanceVape = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="advance-vape-container">
      <h2 className="advance-vape-title" style={{ fontSize: '40px', fontFamily: 'monospace' }}>Advance Vape Kits/MODs & Tank Kits </h2>
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
      <div className="advance-vape-grid">
        {AdvanceVapeProducts.map((product, index) => (
          <div
            key={product.id}
            className={`advance-vape-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="advance-vape-image"
            />
            <div className="advance-vape-details">
              <h3 className="advance-vape-name">{product.name}</h3>
              <p className="advance-vape-price">{product.price}</p>
              <button className="buy-now-button" style={{backgroundColor:'#007bff'}}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvanceVape;
