import { useState } from 'react'
import '../style.css'

function About() {
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

            {/* Team Section */}
            <section className="about-team container">
                <h2>Meet the Humans Behind the Mission</h2>

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
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <h3>Your story of kindness is waiting to be shared.</h3>
                <button className="btn-primary">
                    <a href="/donation">
                        Donate and Share Your Story
                    </a>
                </button>
            </section>

        </div>
    );
}

export default About;
