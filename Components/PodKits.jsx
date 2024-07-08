import React, { useState } from 'react';
import './PodKits.css'; 

import podKit1 from '../assets/pod kit 1.jpg';
import podKit2 from '../assets/pod kit 2.jpg';
import podKit3 from '../assets/pod kit 3.jpg';
import podKit4 from '../assets/pod kit 4.jpg';
import podKit5 from '../assets/pod kit 5.jpg';
import podKit6 from '../assets/pod kit 6.jpg';
import podKit7 from '../assets/pod kit 7.jpg';
import podKit8 from '../assets/pod kit 8.jpg';

const PodKitsProducts = [
  { id: 1, name: 'Uwell Koko', price: '$10', img: podKit1 },
  { id: 2, name: 'Geekvape Wenax Stylus Pod Kit', price: '$15', img: podKit2 },
  { id: 3, name: 'Uwell Valyrian', price: '$12', img: podKit3 },
  { id: 4, name: 'Vinci Pod Kit', price: '$20', img: podKit4 },
  { id: 5, name: 'Vaporesso Zero 2 Pod Kit', price: '$25', img: podKit5 },
  { id: 6, name: 'Geekvape Wenax K1 Pod Kit', price: '$30', img: podKit6 },
  { id: 7, name: 'Geekvape Wenax M1 Pod Kit', price: '$40', img: podKit7 },
  { id: 8, name: 'Vaporesso Zero Vape Kit', price: '$50', img: podKit8 },
];

const PodKits = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div className="pod-kits-container">
      <h2 className="pod-kits-title" style={{ fontSize: '40px', fontFamily: 'monospace' }}>Pod Kits/Vape Pens</h2>
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
      <div className="pod-kits-grid">
        {PodKitsProducts.map((product, index) => (
          <div
            key={product.id}
            className={`pod-kit-item ${zoomedIndex === index ? 'zoomed' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              className="pod-kit-image"
            />
            <div className="pod-kit-details">
              <h3 className="pod-kit-name">{product.name}</h3>
              <p className="pod-kit-price">{product.price}</p>
              
              <button className="buy-now-button" style={{backgroundColor:'#007bff'}}>Add to Cart</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodKits;
