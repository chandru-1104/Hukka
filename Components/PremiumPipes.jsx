import React, { useState } from 'react';

import premiumPipe1 from '../assets/PremiumPipes1.jpg';
import premiumPipe2 from '../assets/PremiumPipes2.jpg';
import premiumPipe3 from '../assets/PremiumPipes3.jpg';
import premiumPipe4 from '../assets/PremiumPipes4.jpg';

const PremiumPipeProducts = [
  { name: 'Premium Pipe 1', price: '$10', img: premiumPipe1 },
  { name: 'Premium Pipe 2', price: '$15', img: premiumPipe2 },
  { name: 'Premium Pipe 3', price: '$12', img: premiumPipe3 },
  { name: 'Premium Pipe 4', price: '$20', img: premiumPipe4 },
];

const PremiumPipes = () => {
  const [zoomedIndex, setZoomedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setZoomedIndex(index);
  };

  const handleMouseLeave = () => {
    setZoomedIndex(-1);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'monospace',
      color: '#ffffff',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '36px' }}>Premium Pipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {PremiumPipeProducts.map((product, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              margin: '10px',
              padding: '10px',
              width: '200px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              transform: zoomedIndex === index ? 'scale(1.15)' : 'scale(1)',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <div style={{ padding: '10px 0' }}>
              <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{product.name}</h3>
              <p style={{ fontSize: '15px', color: '#cccccc', marginBottom: '10px' }}>{product.price}</p>
              <button className="buy-now-button" style={{backgroundColor:'#007bff'}}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPipes;
