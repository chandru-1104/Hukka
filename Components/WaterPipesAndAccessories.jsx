import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/WaterPipesAndAccessories1.jpg';
import image2 from '../assets/WaterPipesAndAccessories2.jpg';
import image3 from '../assets/WaterPipesAndAccessories3.jpg';

const WaterPipesAndAccessories = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: '0px',
      padding: '10px',
      border: '0px solid #ccc',
      borderRadius: '0px',
      boxShadow: '0 0 0px rgba(0, 0, 0, 0.0)',
      color: '#ffffff',
      fontFamily: 'monospace',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#ffffff', marginBottom: '0px', fontSize: '36px' }}>Water Pipes and Accessories</h2>
      <p style={{ fontFamily:'cursive', padding: '0 4%', textAlign: 'justify', fontSize: '15px', color: 'AppWorkspace' }}>
      The water pipe or the "bong" is a water filtered chamber which diffuses the smoke downwards through a series of holes or slits cut into a percolator. These devices are bigger, but offer more diffusion and a cooler, smoother smoking experience.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        {[
          { img: image1, text: 'Acrylic Water Pipes', link: '/acrylic-pipes' }, 
          { img: image2, text: 'Glass Water Pipes', link: '/glass-water-pipes' }, 
          { img: image3, text: 'Ceramic Water Pipes', link: '/ceramic-pipes' },
        ].map((item, index) => (
          <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
            <div
              style={{
                position: 'relative',
                margin: '10px',
                width: '300px', 
                height: '300px', 
                overflow: 'hidden',
                borderRadius: '5px',
                border: '1px solid #ccc',
                transition: 'transform 0.3s ease',
                transform: hoveredBox === index ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.img}
                alt={`Category ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', 
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: hoveredBox === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <p style={{ fontSize: '20px', fontFamily: 'monospace' }}>{item.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WaterPipesAndAccessories;
