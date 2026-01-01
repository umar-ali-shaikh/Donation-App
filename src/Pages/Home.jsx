
import { useState } from 'react'

import '../styleres.css';
import '../style.css'


export default function Home() {
    return (
        <>
            <div className="home-page">

                {/* Hero Section */}
                <section className="hero">
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
                </section>

                {/* Featured Stories */}
                <section className="stories container">
                    <h2>Featured Stories</h2>

                    <div className="story-grid">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="story-card" key={item}>
                                <img
                                    src={`https://i.pravatar.cc/150?img=${item}`}
                                    alt="User"
                                />
                                <h4>Amelia S.</h4>
                                <p>A meal turned into a lifelong mentorship.</p>
                                <button className="link-btn">Read More</button>
                            </div>
                        ))}
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

