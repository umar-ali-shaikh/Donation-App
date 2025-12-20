import { useState } from 'react'
import '../style.css'


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">
                    <h3>❤️ Humans of Kindness</h3>
                    <p>
                        Spreading kindness through real stories and meaningful
                        donations. Every contribution creates hope.
                    </p>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <h4>Explore</h4>
                    <a href="#">Home</a>
                    <a href="#">Stories</a>
                    <a href="#">Donate</a>
                    <a href="#">About Us</a>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h4>Support</h4>
                    <a href="#">Contact</a>
                    <a href="#">FAQs</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>

                {/* Social */}
                <div className="footer-social">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a href="#">📸</a>
                        <a href="#">🐦</a>
                        <a href="#">✖️</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Humans of Kindness. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;