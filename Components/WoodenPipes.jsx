import React, { useState } from 'react';

import woodenPipe1 from '../assets/WoodenPipes1.jpg';
import woodenPipe2 from '../assets/WoodenPipes2.jpg';
import woodenPipe3 from '../assets/WoodenPipes3.jpg';
import woodenPipe4 from '../assets/WoodenPipes4.jpg';

const woodenPipeProducts = [
  { name: 'Wooden Pipe 1', price: '$10', img: woodenPipe1 },
  { name: 'Wooden Pipe 2', price: '$15', img: woodenPipe2 },
  { name: 'Wooden Pipe 3', price: '$12', img: woodenPipe3 },
  { name: 'Wooden Pipe 4', price: '$20', img: woodenPipe4 },
];

const WoodenPipes = () => {
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
      <h2 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '36px' }}>Wooden Pipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {woodenPipeProducts.map((product, index) => (
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
              cursor: 'pointer', 
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
              <p style={{ fontSize: '15px', color: '#cccccc' }}>{product.price}</p>
              <button className="buy-now-button" style={{backgroundColor:'#007bff'}}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WoodenPipes;
