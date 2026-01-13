
import { useState } from 'react'

import '../styleres.css';
import '../style.css';
import aboutusicon from '../assets/aboutus-section-icon.png'
import herosectionicon from '../assets/Home-page-hero-section-icon1.png'
import herosectionimage2 from '../assets/donation-home-herosection2.jpg'
import herosectionimage1 from '../assets/donation-home-herosection1.jpg'
import herosectionimage3 from '../assets/donation-home-herosection3.jpg'

export default function Home() {
    return (
        <>
            <div className="home-page">

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-overlay-image">
                        <img className="active" src={herosectionimage1} alt="" />
                        <img src={herosectionimage2} alt="" />
                        <img src={herosectionimage3} alt="" />
                    </div>
                    <div className="hero-overlay-hlp">
                        <div className="hero-overlay active">
                            <h1>Every Donation Creates a Story</h1>
                            <p>Read real stories from real humans who chose kindness.</p>
                            <div className="hero-actions">
                                <button className="btn-primary">
                                    <a href="/donation">
                                        Donate Now
                                    </a>
                                </button>
                                <button className="btn-secondary">
                                    <a href="/stories">
                                        Read Stories
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="hero-overlay">
                            <h1>Every Donation Creates a Story</h1>
                            <p>Read real stories from real humans who chose kindness.</p>
                            <div className="hero-actions">
                                <button className="btn-primary">
                                    <a href="/donation">
                                        Donate Now
                                    </a>
                                </button>
                                <button className="btn-secondary">
                                    <a href="/stories">
                                        Read Stories
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="hero-overlay">
                            <h1>Every Donation Creates a Story</h1>
                            <p>Read real stories from real humans who chose kindness.</p>
                            <div className="hero-actions">
                                <button className="btn-primary">
                                    <a href="/donation">
                                        Donate Now
                                    </a>
                                </button>
                                <button className="btn-secondary">
                                    <a href="/stories">
                                        Read Stories
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='hero-overlay-icon'>
                        <img src={herosectionicon} alt="" />
                    </div>
                </section>


                {/* Donation Done */}
                <section className="stories container">
                    <h2>Recent Donation</h2>

                    <div className="story-grid">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="story-card" key={item}>
                                <img
                                    src={`https://i.pravatar.cc/150?img=${item}`}
                                    alt="User"
                                />
                                <h4>Amelia S.</h4>
                                <p>A meal turned into a lifelong mentorship.</p>
                                <span className="link-btn">
                                    amt
                                </span>
                            </div>
                        ))}
                    </div>
                </section>


                {/* About US */}
                <section className="about-section slide-up">
                    <div className="container">
                        <div className="card about-card">
                            <div className="about-grid">

                                {/* Left Side: Image */}
                                <div className="about-image-wrapper">
                                    {/* Decorative Sun SVG */}
                                    <div className="decor-sun">
                                        <img src={aboutusicon} alt="About Us Icon" />
                                    </div>

                                    {/* Decorative Dots */}
                                    <div className="decor-dots"></div>

                                    {/* Main Image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                                        alt="Happy Children"
                                        className="main-img hover-scale"
                                    />
                                </div>

                                {/* Right Side: Content */}
                                <div className="about-content">
                                    <div className="section-tag">
                                        <svg
                                            width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span>About Company</span>
                                    </div>

                                    <h2>Rise Your Hand to Help The Poor Children</h2>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                        ultrices gravida.
                                    </p>

                                    {/* Charity List */}
                                    <div className="charity-list">
                                        {['Charity For Foods', 'Charity For Water', 'Charity For Education', 'Charity For Medical'].map((item, index) => (
                                            <div className="list-item" key={index}>
                                                <span className="check-icon">✓</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="action-wrapper">
                                        <button className="btn btn-primary">
                                            Donation <span style={{ marginLeft: '8px' }}>❤</span>
                                        </button>

                                        <div className="hotline-box">
                                            <div className="phone-icon">
                                                <svg
                                                    width="20" height="20" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                </svg>
                                            </div>
                                            <div className="hotline-info">
                                                <span>Hotline</span>
                                                <strong>+012(345) 6789</strong>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* How It Works */}
                <section className="how-it-works">
                    <h2>How It Works</h2>
                    <div className="how-grid container">
                        <div className="how-card">
                            <span>💖</span>
                            <h4>Donate</h4>
                            <p>Support a cause you believe in.</p>
                        </div>
                        <div className="how-card">
                            <span>💬</span>
                            <h4>Share Message</h4>
                            <p>Add a message of kindness.</p>
                        </div>
                        <div className="how-card">
                            <span>🌟</span>
                            <h4>Get Featured</h4>
                            <p>Your story inspires others.</p>
                        </div>
                    </div>
                </section>

                {/* Highlight Story */}
                <section className="highlight container">
                    <div className="highlight-card">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                            alt="Story"
                        />
                        <div className="highlight-content">
                            <h3>
                                “The smallest act of generosity can be the loudest message of
                                hope.”
                            </h3>
                            <p>— Sara Jenkins, San Francisco</p>
                            <button className="btn-secondary">Read Full Story</button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

