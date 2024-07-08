import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import disposableImage1 from '../assets/disposable 1.jpg';
import disposableImage2 from '../assets/disposable 2.jpg';
import disposableImage3 from '../assets/disposable 3.jpg';

const Product = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredBox(index);
  };


  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'monospace' }}>Disposable Vapes & Prefilled Pods Kits</h2>
      <p style={{ fontFamily:'cursive', padding: '0 4%', textAlign: 'justify', fontSize: '15px', color: 'AppWorkspace' }}>
        A pre-filled pod is a closed vape pod that is pre-filled with e-liquid. Usually pre-filled pods (sometimes called cartridges) contain nic salt e-liquid, however some can include freebase nicotine e-liquid. Pre-filled pods are a closed system which means there's no way to refill the pod or remove the coil.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        {/* Box 1 - Disposable Kits */}
        <Link to="/disposable-kits" style={{ textDecoration: 'none', margin: '10px' }}>
          <div
            style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              transition: 'transform 0.3s ease',
              transform: hoveredBox === 1 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={disposableImage1}
              alt="Disposable Vapes 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: hoveredBox === 1 ? 'translate(-50%, -50%)' : 'translate(-50%, 150%)',
                backgroundColor: hoveredBox === 1 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                color: hoveredBox === 1 ? '#fff' : '#000',
                textAlign: 'center',
                fontSize: '20px',
                fontFamily: 'monospace',
                padding: '10px',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <p>Disposable Kits</p>
            </div>
          </div>
        </Link>

        {/* Box 2 - Disposable Pods */}
        <Link to="/disposable-pods" style={{ textDecoration: 'none', margin: '10px' }}>
          <div
            style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              transition: 'transform 0.3s ease',
              transform: hoveredBox === 2 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={disposableImage2}
              alt="Disposable Vapes 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: hoveredBox === 2 ? 'translate(-50%, -50%)' : 'translate(-50%, 150%)',
                backgroundColor: hoveredBox === 2 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                color: hoveredBox === 2 ? '#fff' : '#000',
                textAlign: 'center',
                fontSize: '20px',
                fontFamily: 'monospace',
                padding: '10px',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <p>Disposable Pods</p>
            </div>
          </div>
        </Link>

        {/* Box 3 - Disposable Vapes Single Use */}
        <Link to="/single-use" style={{ textDecoration: 'none', margin: '10px' }}>
          <div
            style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              transition: 'transform 0.3s ease',
              transform: hoveredBox === 3 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={disposableImage3}
              alt="Disposable Vapes 3"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: hoveredBox === 3 ? 'translate(-50%, -50%)' : 'translate(-50%, 150%)',
                backgroundColor: hoveredBox === 3 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                color: hoveredBox === 3 ? '#fff' : '#000',
                textAlign: 'center',
                fontSize: '20px',
                fontFamily: 'monospace',
                padding: '10px',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <p>Disposable Vapes Single Use</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
