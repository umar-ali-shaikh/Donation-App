import { useState } from 'react'
import '../Css/Stories.css'

// Assets
import img1 from "../assets/stories-section2-img1.jpg";
import img2 from "../assets/stories-section2-img2.jpg";
import img3 from "../assets/stories-section2-img3.jpg";
import img4 from "../assets/stories-section2-img4.png";
import img5 from "../assets/stories-section2-img5.png";

// Data Arrays (Component ke bahar rakhna better practice hai)
const processSteps = [
    { id: 1, number: "01", title: "Charity Donate", subtitle: "No matter what have", icon: "fas fa-hand-holding-heart", image: img1, theme: "teal" },
    { id: 2, number: "02", title: "Treatment Help", subtitle: "No matter what have", icon: "fas fa-heartbeat", image: img2, theme: "primary" },
    { id: 3, number: "03", title: "Money Raised", subtitle: "No matter what have", icon: "fas fa-hand-holding-usd", image: img3, theme: "purple" },
];

const volunteers = [
    { id: 1, name: "Smaira Warnore", role: "Volunteer", image: "https://i.pravatar.cc/300?img=32", color: "#ff6b00" },
    { id: 2, name: "Ivor Herbertson", role: "Volunteer", image: "https://i.pravatar.cc/300?img=11", color: "#2d6a4f" },
    { id: 3, name: "Jecia D. Singha", role: "Volunteer", image: "https://i.pravatar.cc/300?img=16", color: "#7b2cbf" },
    { id: 4, name: "Rason Albert", role: "Volunteer", image: "https://i.pravatar.cc/300?img=12", color: "#ff6b00" },
    { id: 5, name: "Tim M. Battler", role: "Volunteer", image: "https://i.pravatar.cc/300?img=5", color: "#2d6a4f" },
    { id: 6, name: "Barown Labnoy", role: "Volunteer", image: "https://i.pravatar.cc/300?img=60", color: "#7b2cbf" },
];

const storiesData = [
    {
        id: 1,
        title: "Kids Education",
        description: "We offer for tutorings, scholarships, and workshop to help students...",
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: 2,
        title: "Pure Water",
        description: "We offer for tutorings, scholarships, and workshop to help students...",
        img: "https://images.unsplash.com/photo-1548936710-44735392827a?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: 3,
        title: "Medical Care",
        description: "We offer for tutorings, scholarships, and workshop to help students...",
        img: "https://images.unsplash.com/photo-1584515169010-2590d757b173?auto=format&fit=crop&q=80&w=400&h=300"
    },
];

const serviceData = [
    {
        id: 1,
        title: "Kids Education",
        description: "We offer tutorings, scholarships, and workshops to help students...",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
        link: "#"
    },
    {
        id: 2,
        title: "Pure Water",
        description: "We provide clean drinking water and sanitation support to communities...",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        link: "#"
    },
    {
        id: 3,
        title: "Medical Care",
        description: "We deliver healthcare services and medical aid to those in need...",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&h=300&q=80",
        link: "#"
    }
];

function Stories() {
    return (
        <div className="stories-wrapper">
            {/* HERO SECTION */}
            <section className="intro-hero text-center d-flex align-items-center">
                <div className="container">
                    <h1 className="display-3 fw-bold">We Celebrate Kindness</h1>
                    <p className="intro-sub mx-auto" style={{ maxWidth: '700px' }}>
                        A platform built to share real stories, real humans, and real acts of kindness.
                    </p>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process-section py-5 bg-light">
                <div className="container py-4">
                    <div className="row g-4">
                        {processSteps.map((step) => (
                            <div key={step.id} className="col-lg-4 col-md-6">
                                <div className={`process-card theme-${step.theme} h-100`}>
                                    <div className="card-header-custom d-flex align-items-center gap-3 p-4">
                                        <div className="icon-wrapper">
                                            <i className={step.icon}></i>
                                        </div>
                                        <div className="text-content">
                                            <h4 className="title mb-0">{step.title}</h4>
                                            <p className="subtitle mb-0">{step.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="card-image-wrapper position-relative">
                                        <img src={step.image} alt={step.title} className="img-fluid w-100" />
                                        <div className="number-badge">{step.number}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VOLUNTEER SECTION */}
            <section className="volunteer-section py-5 bg-white overflow-hidden">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <div className="section-tagline mb-2">
                            <span className="me-2">🧡</span> MEET OUR TEAM
                        </div>
                        <h2 className="section-title fw-bold">Most Passionate Volunteer</h2>
                    </div>

                    <div className="row g-5 justify-content-center">
                        {volunteers.map((person) => (
                            <div className="col-lg-4 col-md-6" key={person.id}>
                                <div className="member-card text-center position-relative">

                                    <div className="member-img-wrapper">
                                        <img src={person.image} alt={person.name} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="member-info-card shadow-lg bg-white">

                                        <div className='member-card-hlp'>
                                            <div className="plus-btn" style={{ backgroundColor: person.color }}>
                                                <i className="fa-solid fa-plus text-white"></i>
                                            </div>
                                            <div className="role-stack mb-2">
                                                <span className="role-label d-block text-muted small">{person.role}</span>
                                            </div>
                                            <h4 className="member-name fw-bold">{person.name}</h4>
                                            <div className='member-card-hlp-image member-card-hlp-image1'>
                                                <img src={img5} alt="" />
                                            </div>
                                            <div className='member-card-hlp-image member-card-hlp-image2'>
                                                <img src={img4} alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORIES GRID */}
            <section className="services-section py-5">
                <div className="container">
                    <div className="row g-4">
                        {serviceData.map((service) => (
                            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
                                <div className="custom-card text-center">
                                    <h3 className="card-title">{service.title}</h3>

                                    {/* SVG Squiggle Divider */}
                                    <div className="squiggle-divider">
                                        <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            />
                                        </svg>
                                    </div>

                                    <p className="card-description">{service.description}</p>

                                    <div className="card-image-wrapper">
                                        <img src={service.image} alt={service.title} className="img-fluid" />
                                    </div>

                                    <a href={service.link} className="read-more-btn">
                                        Read More
                                        <span className="arrow">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Stories;