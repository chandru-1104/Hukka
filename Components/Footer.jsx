import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const address = "1069, Colombo Street, St. Albans, Christchurch";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="ins-tile_wrap ins-tile_animated">
                    <div className="ins-tile_body ins-tile_animated">
                        <h2 className="ins-tile_title">Contact Us</h2>
                        <div className="ins-tile_row ins-tile_row--social">
                            <a href="https://www.facebook.com/HukkaNZ?mibextid-LQQJ4d" title="Facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="ins-tile_icon ins-tile_icon--facebook">
                                <FaFacebook size={30} />
                            </a>
                            <span></span>
                            <a href="https://www.instagram.com/hukkanz/3gsh=MW04eHp0NWxkam15cQ%3D%3D" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="ins-tile_icon ins-tile_icon--instagram">
                                <FaInstagram size={30} />
                            </a>
                            <span></span>
                            <a href="https://twitter.com/YourTwitterHandle" title="Twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="ins-tile_icon ins-tile_icon--twitter">
                                <FaTwitter size={30} />
                            </a>
                            <span></span>
                            <a href="https://www.linkedin.com/in/YourLinkedInHandle/" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="ins-tile_icon ins-tile_icon--linkedin">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                        <div className="ins-tile_row ins-tile_row--location">
                            <div className="ins-tile_delimiter"></div>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {address}
                            </a>
                        </div>
                        <div className="ins-tile_row ins-tile_row--contacts">
                            <div className="ins-tile_text">
                                <a aria-label="Call the store's phone number" href="tel:+64223908349" className="ins-tile_phone">tel:+64223908349</a>
                            </div>
                            <div className="ins-tile_text">
                                <a aria-label="Compose an email to the store" href="mailto:hukkavape@gmail.com" className="ins-tile_email">
                                    hukkavape@gmail.com
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <p>&copy; 2023 HUKKA. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
