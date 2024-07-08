import React, { useState } from 'react';

const AcrylicPipeProducts = [
  { name: 'Arcylic Pipe 1', price: '$10', img: require('../assets/ArcylicPipes1.jpg') },
  { name: 'Arcylic Pipe 2', price: '$15', img: require('../assets/ArcylicPipes2.jpg') },
  { name: 'Arcylic Pipe 3', price: '$12', img: require('../assets/ArcylicPipes3.jpg') },
  { name: 'Arcylic Pipe 4', price: '$20', img: require('../assets/ArcylicPipes4.jpg') },
];

const AcrylicPipes = () => {
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
      <h2 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '36px' }}>Acrylic Pipes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {AcrylicPipeProducts.map((product, index) => (
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
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{product.name}</h3>
            <p style={{ fontSize: '15px', color: '#cccccc' }}>{product.price}</p>
            <button className="buy-now-button" style={{backgroundColor:'#007bff'}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcrylicPipes;