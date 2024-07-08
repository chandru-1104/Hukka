import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/TobaccoPipes1.jpg';
import image2 from '../assets/TobaccoPipes2.jpg';
import image3 from '../assets/TobaccoPipes3.jpg';
import image4 from '../assets/TobaccoPipes4.jpg';

const TobaccoPipes = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    }}>
      <h2 style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'monospace' }}>Tobacco Pipes</h2>
      <p style={{
        fontFamily: 'cursive',
        padding: '5px',
        textAlign: 'justify',
        fontSize: '15px',
        color: 'white',
        marginBottom: '15px',
        marginLeft:'30px',
        marginRight:'30px'
      }}>
        Tobacco pipes have been used for centuries for smoking tobacco and other substances. They come in various materials and designs, each offering a unique smoking experience.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { img: image1, text: 'Plastic Pipes', link: '/plastic-pipes' },
          { img: image2, text: 'Metal Pipes', link: '/metal-pipes' },
          { img: image3, text: 'Premium Pipe', link: '/premium-pipe' },
          { img: image4, text: 'Wooden Pipe', link: '/wooden-pipe' }
        ].map((item, index) => (
          <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
            <div
              style={{
                position: 'relative',
                margin: '10px',
                width: '300px',
                height: '300px',
                overflow: 'hidden',
                border: '1px solid #ccc',
                borderRadius: '5px',
                transition: 'transform 0.3s ease',
                transform: hoveredBox === index ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.img}
                alt={`Tobacco Pipe ${index + 1}`}
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

export default TobaccoPipes;
