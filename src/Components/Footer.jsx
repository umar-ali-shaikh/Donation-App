import { useState } from 'react';
import '../Css/Component.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    {/* Brand + About */}
                    <div className="col-lg-4 col-md-6 mb-4">   
                        {/* Brand */}
                        <a className="navbar-brand text-white fw-bold fs-3 mb-3 d-block" href="#" onClick={(e) => { e.preventDefault(); navigate('/home'); }} style={{ color: 'var(--text-main)' }}>
                            <span style={{ color: 'var(--primary)', marginRight: '5px' }}>
                                <span className="heart me-1">❤️</span>
                                Humans
                            </span>
                            of Kindness
                        </a>

                        <p>
                            We are a non-profit organization dedicated to improving lives through
                            direct action and community support.
                        </p>

                        <div className="social-icons mt-4">
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Causes</a></li>
                            <li><a href="#">Volunteers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Water Supply</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Medical Help</a></li>
                            <li><a href="#">Food Aid</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h4>Newsletter</h4>
                        <p>Subscribe to get the latest news and updates.</p>

                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2"
                                placeholder="Email..."
                            />
                            <button type="submit" className="btn btn-theme">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-center">
                <p className="mb-0 text-white-50">
                    © 2026 Human of Kindness. All Rights Reserved.
                </p>
            </div>
        </footer>

    );
}

export default Footer;