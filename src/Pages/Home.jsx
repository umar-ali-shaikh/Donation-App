
import { useEffect, useState } from 'react';
import '../Css/Home.css';

import aboutusicon from '../assets/aboutus-section-icon.png'
import herosectionicon from '../assets/Home-page-hero-section-icon1.png'
import herosectionimage2 from '../assets/donation-home-herosection2.jpg'
import herosectionimage1 from '../assets/donation-home-herosection1.jpg'
import herosectionimage3 from '../assets/donation-home-herosection3.jpg'

export default function Home() {

    useEffect(() => {
        new window.Swiper(".donorSwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }, []);


    return (
        <>
            <div className="home-page">

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="hero-subtitle">Give a helping hand</div>

                                <h1 className="hero-title animate__animated animate__fadeInUp">
                                    The Power of <br /> Charity &amp; Unity
                                </h1>

                                <p className="text-white fs-5 mb-4">
                                    In a world often marked by division, charity bridges the gap.
                                    Join us to uplift lives and foster hope.
                                </p>

                                <button
                                    className="btn btn-primary btn-lg rounded-pill fw-bold"
                                    style={{
                                        backgroundColor: 'var(--primary-dark)',
                                        borderColor: 'var(--primary)'
                                    }}
                                    onClick={() => navigate('/about')}
                                >
                                    Discover More
                                    <span className="fas fa-arrow-right"></span>
                                    <i></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="rating-badge animate__animated animate__fadeInRight">
                        <div className="stars mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <p className="mb-0 fw-bold">4.9/5 Rating</p>
                        <small className="text-muted">By 1.5M Donors</small>
                    </div>
                </section>


                {/* Donation Done */}
                <section
                    className="section-padding"
                    style={{ backgroundColor: "var(--accent-color)" }}
                >
                    <div className="container">
                        <div className="text-center mb-5">
                            <div
                                className="section-tagline justify-content-center mb-2"
                                style={{ color: "var(--primary-color)" }}
                            >
                                <i className="fas fa-users"></i> Our Heroes
                            </div>
                            <h2>Recent Donors</h2>
                            <p className="text-muted">
                                Thanks to these amazing people for their recent contributions.
                            </p>
                        </div>

                        <div className="swiper donorSwiper">
                            <div className="swiper-wrapper">
                                {[
                                    {
                                        name: "Rahul Sharma",
                                        amount: "$150.00",
                                        time: "2 hours ago",
                                        img: "https://randomuser.me/api/portraits/men/32.jpg",
                                    },
                                    {
                                        name: "Priya Patel",
                                        amount: "$500.00",
                                        time: "5 hours ago",
                                        img: "https://randomuser.me/api/portraits/women/44.jpg",
                                    },
                                    {
                                        name: "Amit Verma",
                                        amount: "$75.00",
                                        time: "Just now",
                                        img: "https://randomuser.me/api/portraits/men/85.jpg",
                                    },
                                    {
                                        name: "Rahul Sharma",
                                        amount: "$150.00",
                                        time: "2 hours ago",
                                        img: "https://randomuser.me/api/portraits/men/32.jpg",
                                    },
                                    {
                                        name: "Priya Patel",
                                        amount: "$500.00",
                                        time: "5 hours ago",
                                        img: "https://randomuser.me/api/portraits/women/44.jpg",
                                    },
                                    {
                                        name: "Amit Verma",
                                        amount: "$75.00",
                                        time: "Just now",
                                        img: "https://randomuser.me/api/portraits/men/85.jpg",
                                    },
                                ].map((donor, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="donor-card">
                                            <img
                                                src={donor.img}
                                                alt={donor.name}
                                                className="donor-img"
                                            />
                                            <div>
                                                <h5 className="mb-1">{donor.name}</h5>
                                                <div className="donation-amount">{donor.amount}</div>
                                                <span className="donation-time">
                                                    <i className="fas fa-clock"></i> {donor.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding ">
                    <div className="container">
                        <div className="row align-items-center">

                            {/* Left Content */}
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div
                                    className="section-tagline mb-3"
                                    style={{ color: "var(--primary-color)" }}
                                >
                                    <i className="fas fa-chart-pie"></i> Transparency
                                </div>

                                <h2 className="mb-4">Where Does Your Donation Go?</h2>

                                <p className="text-muted mb-4">
                                    We believe in complete transparency. Every penny you donate is used
                                    efficiently to maximize impact. Here is the breakdown of how we
                                    utilize our funds.
                                </p>

                                <div className="d-flex align-items-start mb-3">
                                    <i
                                        className="fas fa-check-circle mt-1 me-3"
                                        style={{ color: "var(--primary-color)", fontSize: "20px" }}
                                    ></i>
                                    <div>
                                        <h5>Direct Aid</h5>
                                        <p className="text-muted small">
                                            Food, water, and medicine distribution directly to victims.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <i
                                        className="fas fa-check-circle mt-1 me-3"
                                        style={{ color: "var(--primary-color)", fontSize: "20px" }}
                                    ></i>
                                    <div>
                                        <h5>Future Development</h5>
                                        <p className="text-muted small">
                                            Building schools and wells for long-term solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="col-lg-7">
                                <div className="usage-box">

                                    <div className="progress-label">
                                        <span>
                                            <i className="fas fa-utensils me-2"></i> Food &amp; Medical Aid
                                        </span>
                                        <span>45%</span>
                                    </div>
                                    <div className="progress custom-progress">
                                        <div
                                            className="progress-bar progress-bar-theme"
                                            role="progressbar"
                                            style={{ width: "45%" }}
                                        ></div>
                                    </div>

                                    <div className="progress-label">
                                        <span>
                                            <i className="fas fa-child me-2"></i> Child Education
                                        </span>
                                        <span>30%</span>
                                    </div>
                                    <div className="progress custom-progress">
                                        <div
                                            className="progress-bar progress-bar-theme"
                                            role="progressbar"
                                            style={{ width: "30%" }}
                                        ></div>
                                    </div>

                                    <div className="progress-label">
                                        <span>
                                            <i className="fas fa-truck me-2"></i> Logistics &amp; Operations
                                        </span>
                                        <span>15%</span>
                                    </div>
                                    <div className="progress custom-progress">
                                        <div
                                            className="progress-bar progress-bar-theme"
                                            role="progressbar"
                                            style={{ width: "15%" }}
                                        ></div>
                                    </div>

                                    <div className="progress-label">
                                        <span>
                                            <i className="fas fa-piggy-bank me-2"></i> Fundraising &amp; Admin
                                        </span>
                                        <span>10%</span>
                                    </div>
                                    <div className="progress custom-progress">
                                        <div
                                            className="progress-bar progress-bar-theme"
                                            role="progressbar"
                                            style={{ width: "10%" }}
                                        ></div>
                                    </div>

                                    <div className="alert alert-light border mt-4 mb-0 text-center text-muted small">
                                        <i className="fas fa-info-circle me-1"></i>
                                        Audited by independent financial agency in 2025.
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="features-section pt-0">
                    <div className="container features-container">
                        <div className="row g-4">

                            <div className="col-md-4">
                                <div className="feature-card text-center">
                                    <i className="fas fa-tint feature-icon"></i>
                                    <h4>Pure Water</h4>
                                    <p className="text-muted">
                                        Providing clean water access to remote villages and communities.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-decoration-none fw-bold"
                                        style={{ color: "var(--primary-color)" }}
                                    >
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="feature-card text-center">
                                    <i className="fas fa-graduation-cap feature-icon"></i>
                                    <h4>Education</h4>
                                    <p className="text-muted">
                                        Sponsoring school supplies and tuition for underprivileged children.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-decoration-none fw-bold"
                                        style={{ color: "var(--primary-color)" }}
                                    >
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="feature-card text-center">
                                    <i className="fas fa-heartbeat feature-icon"></i>
                                    <h4>Medical Care</h4>
                                    <p className="text-muted">
                                        Offering free medical camps and medicine to those in need.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-decoration-none fw-bold"
                                        style={{ color: "var(--primary-color)" }}
                                    >
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container">
                        <div className="row align-items-center">

                            {/* Image Side */}
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="about-img-box">
                                    <img
                                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="About"
                                        className="main-img img-fluid"
                                    />

                                    <div className="exp-badge">
                                        <h3>25+</h3>
                                        <span>
                                            Years of <br /> Experience
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="col-lg-6 ps-lg-5">
                                <div className="section-tagline mb-3">
                                    <i className="fas fa-heart"></i> About Organization
                                </div>

                                <h2 className="display-6 mb-4">
                                    We Believe That We Can Save More Lives With You
                                </h2>

                                <p className="text-muted mb-4">
                                    Together, we can create a brighter future. Whether you choose to
                                    volunteer, donate, or spread the word, your contribution matters.
                                </p>

                                <ul className="list-check mb-4">
                                    <li>
                                        <i className="fas fa-check-circle"></i> Transparent Fund Usage
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i> Immediate Crisis Relief
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i> Sustainable Development Plans
                                    </li>
                                </ul>

                                <button
                                    className="btn btn-primary btn-lg rounded-pill fw-bold"
                                    style={{
                                        backgroundColor: "var(--primary-dark)",
                                        borderColor: "var(--primary)",
                                    }}
                                >
                                    Learn More
                                    <span className="fas fa-arrow-right ms-2"></span>
                                    <i></i>
                                </button>

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
                <section className="highlight">
                    <div className="container">
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
                                <button
                                    className="btn btn-primary btn-lg rounded-pill fw-bold"
                                    style={{
                                        backgroundColor: "var(--primary-dark)",
                                        borderColor: "var(--primary)",
                                    }}
                                >
                                    Read Full Story
                                    <span className="fas fa-arrow-right ms-2"></span>
                                    <i></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

