import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vapeImage1 from '../assets/vape 1.jpg';
import vapeImage2 from '../assets/vape 2.jpg';
import vapeImage3 from '../assets/vape 3.jpg';
import vapeImage4 from '../assets/vape 4.jpg';
import vapeImage5 from '../assets/vape 5.jpg';

const VapeProducts = ({ id, name, price, description }) => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'monospace' }}>Vape & Vaping Accessories</h2>
      <p style={{ fontFamily: 'monospace', padding: '0 4%', textAlign: 'justify', fontSize: '17px', color: 'AppWorkspace' }}>
  Battery-powered vape devices create an aerosol that looks like water vapor but contains nicotine, flavoring, and more than 30 other chemicals. The aerosol is inhaled into the lungs where the nicotine and chemicals cross over into the bloodstream. The earliest vape devices looked like cigarettes. A vape shop is a retail outlet focusing on the selling of electronic cigarette products. There are also online vape shops. E-cigarettes products are mainly available online or in dedicated "vape" storefronts.
</p>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Box 1 - Disposable Vapes & Prefilled Pods Kits */}
        <Link to="/disposable-vapes" style={{ textDecoration: 'none', margin: '10px', width: '300px' }}>
          <div
            style={{
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              marginBottom: '20px',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={vapeImage1}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {hoveredBox === 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <p>Disposable Vapes & Prefilled Pods Kits</p>
              </div>
            )}
          </div>
        </Link>

        {/* Box 2 - Pod Kits/Vape Pens */}
        <Link to="/pod-kits" style={{ textDecoration: 'none', margin: '10px', width: '300px' }}>
          <div
            style={{
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              marginBottom: '20px',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={vapeImage2}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {hoveredBox === 2 && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <p>Pod Kits/Vape Pens</p>
              </div>
            )}
          </div>
        </Link>

        {/* Box 3 - Advance Vape Kits/MODs & Tank Kits */}
        <Link to="/advance-vape" style={{ textDecoration: 'none', margin: '10px', width: '300px' }}>
          <div
            style={{
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              marginBottom: '20px',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={vapeImage3}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {hoveredBox === 3 && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <p>Advance Vape Kits/MODs & Tank Kits</p>
              </div>
            )}
          </div>
        </Link>

        {/* Box 4 - Vape Juice/Liquids */}
        <Link to="/vape-juice" style={{ textDecoration: 'none', margin: '10px', width: '300px' }}>
          <div
            style={{
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              marginBottom: '20px',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={vapeImage4}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {hoveredBox === 4 && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <p>Vape Juice/Liquids</p>
              </div>
            )}
          </div>
        </Link>

        {/* Box 5 - Refillable Pods, Coils, Tanks & Accessories */}
        <Link to="/refillable-pods" style={{ textDecoration: 'none', margin: '10px', width: '300px' }}>
          <div
            style={{
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              marginBottom: '20px',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={vapeImage5}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {hoveredBox === 5 && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  padding: '10px',
                  boxSizing: 'border-box',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <p>Refillable Pods, Coils, Tanks & Accessories</p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VapeProducts;
