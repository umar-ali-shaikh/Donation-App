import { useState } from 'react'
import '../Css/About.css'

const causesData = [
    {
        id: 1,
        category: "Health & Nutrition",
        title: "Feed nutritions meals to a poor rural child",
        desc: "These activities offer opportunities to connect with others, build friendship & foster sense..",
        raised: 28000,
        goal: 60000,
        percentage: 65,
        daysLeft: 29,
        supporters: "50+",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800", // Child smiling
    },
    {
        id: 2,
        category: "Health & Food",
        title: "Help differently abled person to feel strong confident",
        desc: "These activities offer opportunities to connect with others, build friendship & foster sense..",
        raised: 67000,
        goal: 90000,
        percentage: 44,
        daysLeft: 29,
        supporters: "50+",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800", // Elderly/Woman
    },
    {
        id: 3,
        category: "Health & Food",
        title: "Potable water for villages in mozambique",
        desc: "These activities offer opportunities to connect with others, build friendship & foster sense..",
        raised: 30000,
        goal: 85000,
        percentage: 77,
        daysLeft: 29,
        supporters: "50+",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800", // Children group
    },
];

const categories = ["All Category", "Health & Food", "Water & Environment", "Hunger & Nutrition"];


function About() {

    const [activeTab, setActiveTab] = useState("All Category");

    const filteredCauses =
        activeTab === "All Category"
            ? causesData
            : causesData.filter((item) => item.category === activeTab);
    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <h1>How Kindness Becomes a Story</h1>
                <p>
                    Every small act of kindness has the power to inspire, heal, and bring
                    people together.
                </p>
            </section>

            {/* Story Section */}
            <section className="about-story card">
                <h2>Our Story</h2>
                <p>
                    Humans of Kindness was built with one belief — kindness matters.
                    We are a community-driven platform where people share real stories
                    of compassion, support causes they care about, and inspire others
                    through meaningful actions.
                </p>
                <p>
                    Through storytelling and donations, we aim to create a space where
                    humanity shines brighter every day.
                </p>

                {/* Why We Started */}
                <h3>Why We Started This Campaign</h3>
                <p>
                    We started this campaign after witnessing how small, unnoticed acts of
                    kindness often go untold. Behind every donation and every helping hand,
                    there is a powerful human story — and we wanted to give those stories
                    a voice.
                </p>
                <p>
                    In a fast-moving world, Humans of Kindness was created to slow things
                    down, remind us of our shared humanity, and inspire people to take action,
                    not just with money, but with empathy, care, and hope.
                </p>
            </section>


            {/* Impact Section */}
            <section className="about-impact container">
                <div className="impact-card">
                    <h3>10,000+</h3>
                    <p>Lives Touched</p>
                </div>
                <div className="impact-card">
                    <h3>500+</h3>
                    <p>Stories Shared</p>
                </div>
                <div className="impact-card">
                    <h3>₹1.5M+</h3>
                    <p>Donations Raised</p>
                </div>
            </section>

            <section className="causes-section py-5">
                <div className='causes-section-overlaybg'>

                </div>
                <div className="container">

                    {/* --- Header --- */}
                    <div className="text-center mb-5">
                        <div className="section-subtitle mb-2">
                            <span className="heart-icon me-2">🧡</span> Our Global Cases
                        </div>
                        <h2 className="section-title">Spread joy with a Donation</h2>
                    </div>

                    {/* --- Filter Tabs --- */}
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`btn btn-filter ${activeTab === cat ? "active" : ""}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* --- Cards Grid --- */}
                    <div className="row">
                        {filteredCauses.map((cause) => (
                            <div key={cause.id} className="col-lg-4 col-md-6 mb-4">


                                {/* Image & Floating Stats */}
                                <div className="card-img-wrapper">
                                    <div className='card-img-wrapper-image'>
                                        <img src={cause.image} alt={cause.title} className="card-img-top" />
                                    </div>

                                    {/* Floating Overlay Box */}
                                    <div className="stats-overlay">
                                        <div className="icon-circle">
                                            <i className="fas fa-dollar-sign"></i>
                                        </div>
                                        <div className="stats-content">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <div>
                                                    <small className="d-block text-white-50">Charity Raised</small>
                                                    <span className="fw-bold text-white">${cause.raised.toLocaleString()} / ${cause.goal.toLocaleString()}</span>
                                                </div>
                                                <div className="percentage-badge">
                                                    {cause.percentage}%
                                                </div>
                                            </div>
                                            {/* Progress Bar inside overlay */}
                                            <div className="progress mt-2" style={{ height: '4px' }}>
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${cause.percentage}%`, backgroundColor: 'var(--primary)' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card cause-card">


                                    {/* Body */}
                                    <div className="card-body ">
                                        <div className="badge-category mb-2"># {cause.category}</div>
                                        <h4 className="card-title mb-3">{cause.title}</h4>
                                        <p className="card-text text-muted">{cause.desc}</p>
                                    </div>

                                </div>

                                {/* Footer */}
                                <div className="card-footer py-3">
                                    <div className="row text-center">
                                        <div className="col-6 border-end d-flex align-items-center justify-content-center gap-4">
                                            <span className='icon'>
                                                <i className="fas fa-calendar-alt text-primary-custom"></i>
                                            </span>
                                            <div className="text-start lh-1">
                                                <span className="fw-bold d-block text-dark">Days</span>
                                                <small className="text-muted">{cause.daysLeft} Days Left</small>
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex align-items-center justify-content-center gap-4">
                                            <span className='icon'>
                                                <i className="fas fa-users text-primary-custom"></i>
                                            </span>
                                            <div className="text-start lh-1">
                                                <span className="fw-bold d-block text-dark">{cause.supporters}</span>
                                                <small className="text-muted">Supporters</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- Pagination Dots --- */}
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                </div>
            </section>


            {/* Team Section */}
            <section className="about-team section-padding">
                <div className='container'>
                    <h2>Meet the Humans Behind the Mission</h2>
                    <button href="/contact"
                        className="btn btn-primary btn-lg rounded-pill fw-bold"
                        style={{
                            backgroundColor: "var(--primary-dark)",
                            borderColor: "var(--primary)",
                        }}
                    >
                        <a href="/donation">
                            Donate and Share Your Story
                            <span className="fas fa-arrow-right ms-2"></span>
                            <i></i>
                        </a>
                    </button>
                    <div className="team-grid">
                        <div className="team-card">
                            <img src="https://i.pravatar.cc/150?img=32" alt="Founder" />
                            <h4>Amelia Sharma</h4>
                            <p>Founder</p>
                        </div>

                        <div className="team-card">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Community Lead" />
                            <h4>Raghav Mehta</h4>
                            <p>Community Lead</p>
                        </div>

                        <div className="team-card">
                            <img src="https://i.pravatar.cc/150?img=45" alt="Story Curator" />
                            <h4>Sarah Khan</h4>
                            <p>Story Curator</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default About;
