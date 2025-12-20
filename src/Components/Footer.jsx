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
                    <a href="/home">Home</a>
                    <a href="/stories">Stories</a>
                    <a href="/donation">Donate</a>
                    <a href="/about">About Us</a>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h4>Support</h4>
                    <a href="/contact">Contact</a>
                    <a href="#">FAQs</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>

                {/* Social */}
                <div className="footer-social">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
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