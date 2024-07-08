import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import juiceImage1 from '../assets/juice 1.jpg';
import juiceImage2 from '../assets/juice 2.jpg';

const VapeJuice = ({ id, name, price, description }) => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div style={{ display: 'flex',textAlign:'justify', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'monospace' }}>Vape Juice/Liquids</h2>
      <p style={{ fontFamily: 'cursive', padding: '0 4%', textAlign: 'justify', fontSize: '15px', color: 'AppWorkspace', textAlign: 'center' }}>
        Vape juice, also called e-Juice or e-liquid, refers to the liquid product used in vaporizers and electronic cigarettes to create vapor. The vaporizer heats the vape juice to between 200 and 400 degrees celsius and then turns it into vapor. Inhaling the vapor gives you the flavor you want.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        {/* Box 1 - Nicotine Salts Vape Juice */}
        <Link to="/nicotine-salts" style={{ textDecoration: 'none', width: '300px', height: '300px', margin: '10px' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              border: '1px solid #ccc',
              transition: 'transform 0.3s ease',
              transform: hoveredBox === 1 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={juiceImage1}
              alt="Nicotine Salts Vape Juice"
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
              <p>Nicotine Salts Vape Juice</p>
            </div>
          </div>
        </Link>

        {/* Box 2 - Freebase Vape Juice */}
        <Link to="/free-base" style={{ textDecoration: 'none', width: '300px', height: '300px', margin: '10px' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              border: '1px solid #ccc',
              transition: 'transform 0.3s ease',
              transform: hoveredBox === 2 ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={juiceImage2}
              alt="Freebase Vape Juice"
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
              <p>Freebase Vape Juice</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VapeJuice;
