import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import aboutUsImage1 from '../assets/about 1.jpg';
import disposableImage1 from '../assets/accessories 1.jpg';
import disposableImage2 from '../assets/accessories 2.jpg';

const HomePage = () => {
    const [hoveredBox, setHoveredBox] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const aboutUsSection = document.getElementById('about-us');
            if (aboutUsSection) {
                const { top } = aboutUsSection.getBoundingClientRect();
                const isInView = top >= 0 && top <= window.innerHeight;
                if (isInView) {
                    setHoveredBox(3); 
                } else {
                    setHoveredBox(null);
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (boxIndex) => {
        setHoveredBox(boxIndex);
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
    };

    return (
        <div className="home-page">
            <div className="header-section">
                <div className="smoke-background">
                    <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: '24px' }}>THE BEST SUB-OHM</h1>
                    <div className="store-name-box">
                        <h2>HUKKA</h2>
                    </div>
                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '24px' }}>Check Out Bestsellers Sub-Ohm Kits For The Cloud-Creating Vapors.<br />Check out Our Works</p>
                </div>
            </div>
            <div id="about-us" className="about-us-section">
                <div className="image-container">
                    <img src={aboutUsImage1} alt="About Us" />
                </div>
                <div className={`text-column ${hoveredBox === 3 ? 'hovered' : ''}`}>
                    <div className={`text-overlay ${hoveredBox === 3 ? 'hovered' : ''}`}>
                        About Us
                    </div>
                    <p>
                        To deliver your favorite products, we have become partners with the most reliable companies.
                        We are ready to entrust them with your orders and are always on your side if something goes wrong.
                    </p>
                    <p>
                        We will be happy to assist you for eligible returns, with return instructions and the return
                        shipping address. If you need a return or exchange, send us an email so we can discuss a replacement.
                    </p>
                </div>
            </div>
            <div className="products-section">
                <h2>Shop By Categories</h2>
                <div className="categories-row">
                    <Link to="/vape-products" style={{ textDecoration: 'none' }}>
                        <div
                            className="category-box"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`image-container ${hoveredBox === 1 ? 'hovered' : ''}`}>
                                <img
                                    src={disposableImage1}
                                    alt="Vape & Vaping Accessories"
                                    className="category-image"
                                />
                            </div>
                            <div className={`text-overlay ${hoveredBox === 1 ? 'hovered' : ''}`}>
                                Vape & Vaping Accessories
                            </div>
                        </div>
                    </Link>
                    <Link to="/smoke-products" style={{ textDecoration: 'none' }}>
                        <div
                            className="category-box"
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`image-container ${hoveredBox === 2 ? 'hovered' : ''}`}>
                                <img
                                    src={disposableImage2}
                                    alt="Hookah & Hookah Accessories"
                                    className="category-image"
                                />
                            </div>
                            <div className={`text-overlay ${hoveredBox === 2 ? 'hovered' : ''}`}>
                               Smoke Products
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
