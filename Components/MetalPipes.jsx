import React, { useState } from 'react';
import metalPipe1 from '../assets/MetalPipes1.jpg';
import metalPipe2 from '../assets/MetalPipes2.jpg';
import metalPipe3 from '../assets/MetalPipes3.jpg';
import metalPipe4 from '../assets/MetalPipes4.jpg';

const metalPipeProducts = [
  { name: 'Metal Pipe 1', price: '$10', img: metalPipe1 },
  { name: 'Metal Pipe 2', price: '$15', img: metalPipe2 },
  { name: 'Metal Pipe 3', price: '$12', img: metalPipe3 },
  { name: 'Metal Pipe 4', price: '$20', img: metalPipe4 },
];

const MetalPipes = () => {
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
      marginTop: '20px',
      fontFamily: 'monospace',
      color: '#ffffff',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '36px', color: '#ffffff', marginBottom: '20px' }}>Metal Pipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {metalPipeProducts.map((product, index) => (
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

export default MetalPipes;
