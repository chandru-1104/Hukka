import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import category1Image from '../assets/Smoke cat 1.jpg';
import category2Image from '../assets/Smoke Cat 2.jpg';

const SmokeProduct = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      color: '#ffffff',
      fontFamily: 'monospace',
      textAlign: 'center', 
    }}>
      <h2 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '36px' }}>Smoke Products</h2>
      <p style={{ fontFamily:'cursive', padding: '0 4%', textAlign: 'justify', fontSize: '15px', color: 'AppWorkspace' }}>
        Smoking Accessories: Glass Water Pipes, Tobacco Pipes, Acrylic Water Pipes, and Cone pieces. Hukka/Shisha Pipes & Accessories, Hukka/Shisha Flavours, Coconut Charcoal, Concentrate Flavours. Lighters, Butane Fluid, Lighter Gas, Zippo Lighters, Flints & Accessories. RAW Rolling Papers, Tips, Pre-rolled Papers & Tips, Ash Trays, Kush Blunts, Tobacco Rolling Trays & Tins. Sharpstone Metal Tobacco Grinders, Acrylic Grinders, Silver Screen Mesh, Brass Screen Mesh.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Box 1 - Tobacco Pipes */}
        <div
          style={{
            position: 'relative',
            margin: '10px',
            width: '300px',
            height: '300px', 
            overflow: 'hidden',
            borderRadius: '1px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            transform: hoveredBox === 1 ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/tobacco-pipes">
            <img
              src={category1Image}
              alt="Category 1"
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                borderRadius: '1px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: hoveredBox === 1 ? 'translate(-50%, -50%)' : 'translate(-50%, 150%)',
                textAlign: 'center',
                backgroundColor: hoveredBox === 1 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                padding: '10px',
                borderRadius: '0px',
                fontSize: '24px',
                fontFamily: 'monospace',
                color: hoveredBox === 1 ? '#fff' : '#000',
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              <p>Tobacco Pipes</p>
            </div>
          </Link>
        </div>

        {/* Box 2 - Water Pipes and Accessories */}
        <div
          style={{
            position: 'relative',
            margin: '10px',
            width: '300px', 
            height: '300px', 
            overflow: 'hidden',
            borderRadius: '1px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            transform: hoveredBox === 2 ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/water-pipes-and-accessories">
            <img
              src={category2Image}
              alt="Category 2"
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                borderRadius: '1px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: hoveredBox === 2 ? 'translate(-50%, -50%)' : 'translate(-50%, 150%)',
                textAlign: 'center',
                backgroundColor: hoveredBox === 2 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                padding: '10px',
                borderRadius: '0px',
                fontSize: '24px',
                fontFamily: 'monospace',
                color: hoveredBox === 2 ? '#fff' : '#000',
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              <p>Water Pipes and Accessories</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmokeProduct;
