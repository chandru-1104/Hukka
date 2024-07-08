import React, { useState } from 'react';
import plasticPipe1 from '../assets/PlasticPipe1.jpg';
import plasticPipe2 from '../assets/PlasticPipe2.jpg';
import plasticPipe3 from '../assets/PlasticPipe3.jpg';
import plasticPipe4 from '../assets/PlasticPipe4.jpg';

const plasticPipeProducts = [
  { name: 'Plastic Pipe 1', price: '$10', img: plasticPipe1 },
  { name: 'Plastic Pipe 2', price: '$15', img: plasticPipe2 },
  { name: 'Plastic Pipe 3', price: '$12', img: plasticPipe3 },
  { name: 'Plastic Pipe 4', price: '$20', img: plasticPipe4 },
];

const PlasticPipes = () => {
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
      <h2 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '36px' }}>Plastic Pipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {plasticPipeProducts.map((product, index) => (
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
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#ffffff', marginBottom: '10px' }}>{product.description}</p>
              <button className="buy-now-button" style={{backgroundColor:'#007bff'}}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlasticPipes;
